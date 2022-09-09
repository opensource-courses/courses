# Criação de regras de negócio relacionadas ao caso de uso na camada de use-case

Ok, talvez quando pensamos em regras e casos de uso, pensamos na camada de use-case. Então vamos separar nossos use-cases de acordo com o agrupamento das funcionalidades, ou seja, as use-cases para registro de usuários é algo independente, o use-case de autenticação de usuário é algo independente, e assim por diante, seguinte regra de dependêcnia (que falamos no conteúdo anterior) e depedendendo de portas, que podemos ou nõa relacionar a apenas um use-case na separção de pastas, e recomendo que use interfaces para ter portas mais simples para implementar com os plugins e dependências externas.

Podemos utilizar alguns diferentes processos para implentação de use-cases, mostrarei um que gosto muito e utilizo no cotidiano de dev.

### Definindo prováveis portas primeiro.

Antes de definir as portas iremos já definir nosso DTO, ou seja, nosso objeto que irá representar nosso objetivo final, permanecer essa informação.
Para permanecer esse dado, precisaremos de um nome, email e senha, os outros dados necessários serão gerenciados pela aplicação, caso existam mais dados como createdAt, updatedAt, id. Ou seja, o DTO representa o objeto que vai ser salvo mas que é transitado a partir dos pontos de entrada.

O único DTO que iremos ter é o `ICreateUserDto`

dtos/ICreateUserDto.ts
```typescrpit
export default interface ICreateUserDto {
  name: string;
  email: string;
  password: string;
}
```

Um possível processo é você definir as portas que você irá precisar já de inicio, então listaremos nossas dependências e criaremos portas (interfaces).

Dependências:

- Gerenciador de Token
  - Gerar token (salvando o user id no token)
- Repositorio de User
  - Buscar usuário pelo email
  - Salvar novo usuário
- Criptografia de senhas
  - Criptografar senha


Então na mesma pasta de use-cases, teremos uma pasta `ports`, onde colocaremos as portas apenas separando por arquivo, mas sem pensar a atrelar a algum tipo especifico de porta (manager, repository, etc).


use-cases/ports/ITokenManager.ts
```typescrpit
export default interface ITokenManager {
  generate (id: string): string;
}
```


use-cases/ports/IUserRepository.ts
```typescrpit
export default interface IUserRepository {
  findByEmail (email: string): Promise<IUser>;
  save(user: ICreateUserDto): Promise<IUser>
}
```


use-cases/ports/IEncryptManager.ts
```typescrpit
export default interface IEncryptManager {
  encrypt (raw: string): Promise<string>;
}
```

### Criando use-case utilizando portas definidas anteriormente

Para facilitar nossa vida, iremos adicionar getters para `email`, `password` e `name` desde já.

```typescript
class User {
  private readonly _name: string;
  private readonly _email: string;
  private readonly _password: string;

	.
	.
	.

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  get password(): string {
    return this._password;
  }
}
```

Iremos injetar as dependências (já comentei sobre a regra de dependência anteriormente, uma camada mais interna não pode depender de uma mais externa), ou seja, nesse momento nosso use-case só irá ter como referência as portas.

Regras que verificaremos nessa camada:
- Validade do payload (utilizando método estático create que fizemos anteriormente).
- Duplicação de email

use-cases/SignUpUseCase.ts
```typescript
export default class SignUpUseCase {
  constructor (
    private userRepository: IUserRepository,
    private tokenManager: ITokenManager,
    private encryptManager: IEncryptManager,
  ) {}

  async execute ({ name, email, password }: ICreateUserDto): Promise<string> {
    const user = User.create(name, email, password);

    const userAlreadyExists = await this.userRepository.findByEmail(user.email);

    if(userAlreadyExists) throw new Error('E-mail already registered.');
  }
}
```

Ações que iremos executar:
- Criar hash com a senha
- Salvar user
- Retornar token

use-cases/SignUpUseCase.ts
```typescript
export default class SignUpUseCase {
  constructor (
    private userRepository: IUserRepository,
    private tokenManager: ITokenManager,
    private encryptManager: IEncryptManager,
  ) {}

  async execute ({ name, email, password }: ICreateUserDto): Promise<string> {
  .
  .
  .

    const hashedPassword = await this.encryptManager.encrypt(user.password);

    const storedUser = await this.userRepository.save({name: user.name, email: user.email, password: hashedPassword });

    return this.tokenManager.generate(storedUser.id);
  }
}
```

### Repetindo o processo para o use-case de Sign In

Adicionaremos uma nova definição na porta de gerenciamento de criptográfia chamada `compare`, que receberá a senha digitada (raw) com a senha que temos salva como hash (hashed).

use-cases/ports/IEncryptManager.ts
```typescrpit
export default interface IEncryptManager {
+ compare (raw: string, hashed: string): Promise<boolean>;
}
```

Criaremos também um Dto para isolar as credenciais.

dtos/ICredentialsDto.ts
```typescrpit
export default interface ICredentialsDto {
  email: string;
  password: string;
}
```

E com isso podemos partir para nosso caso de uso.

Nesse caso não utilizamos nossa validação no objeto enviado pelo user, já que não salvaremos nenhuma informação, apenas faremos consultas e geraremos um token.


Ações que iremos executar e regras que iremos validar:
- Verificar se o email está cadastrado
- Comparar se senha enviada é a mesma salva.
- Retornar token em caso de sucesso para as regras anteriores

use-cases/SignInUseCase.ts
```typescript
export default class SignInUseCase {
  constructor (
    private userRepository: IUserRepository,
    private tokenManager: ITokenManager,
    private encryptManager: IEncryptManager,
  ) {}

  async execute ({ email, password }: ICredentialsDto): Promise<string> {

    const user = await this.userRepository.findByEmail(email);

    if(!user) throw new Error('E-mail not registered.');

    const isCorrectPassword = await this.encryptManager.compare(password, user.password);

    if(!isCorrectPassword) throw new Error('Incorrect password.');

    return this.tokenManager.generate(user.id);
  }
}
```


A camada de casos de uso é extremamente importante na arquitetura limpa (acho muito interessante utilizar as especificações da arquitetura limpa, mesmo que sem seguir as camadas a risca), sendo uma das camadas internas que consideramos indispensáveis. Pór exemplo, você pode ter uma situação onde não tem regras no domínio, não precisando de uma camada para o domínio, apenas uma interface documentando e representando o objeto principal do domínio seria o suficiente, mas mesmo assim iremos precisar de uma camada de casos de use para definir nossa funcionalidade, tornando ela praticamente indispensável.


Muito obrigado por ler até aqui, até o próximo conteúdo!
