# Design Pattern: Factory Method

## Alinhamento de expectativas

Se você nunca estudou orientação a objetos e conceitos base de desenvolvimento, você poderá sofrer um pouco para entender abstrações, mas focando em buscar entender (e pesquisar) conceitos que você leu aqui e nunca viu antes, você aprenderá uma parte muito interessante do desenvolvimento de software.

## Definições

Core, cerne, coração da aplicação. Muitas formas que vemos desenvolvedores se referindo a camada de abstração de entidades de um domínio, a parte mais importante e que modela todo o caminho de implementação de camadas mais externas.

Na nossa aplicação utilizaremos a Entity (entidade) de Usuário como cerne, para você visualizar de forma mais tangível.

## Projeto

Criaremos uma abstração de autenticação de usuários. É um tema recorrente na vida de desenvolvedores, de estagiários a sêniors.
Muitas vezes quando temos uma carreira de Frontend, entendemos muito bem de apresentação e camadas mais externas, e isso é ótimo, mas entender as camadas mais internas irá te ajudar a pensar em soluções mais robustas, abstrair a camada de entrada/saída de dados quando sendo cliente de uma API externa, por exemplo.
Com essa pequena abstração de autenticação de usuários, principalmente focada em criar usuários nesse conteúdo (o projeto se desdobrará por todos os conteúdos do tema "1 - Abstração de negócios para código"), você aprenderá um design pattern (Factory Method) e como trazer regras críticas para a camada central da aplicação.

## Formato

Irei adicionar tópicos, a explicação da implementação (e processos de elaboração de idéias), e por fim a representação de código daquele tópico.

## Implementação

#### 1 - Implementando base do Core (Entity Usuário na cerne do domínio de Autenticação)

Bem, aqui trabalharemos envolvidos na seguinte idéia, a classe `User` trabalhará as regras principais para se criar usuários (nos próximos conteúdos teremos a mesma idéia, porém com outras camadas e funcionalidades).

Quais são as regras que temos para o usuário?

- Nome deve ter mais de 10 caracteres.
- E-mail deve ter @ e .edu
- Senha deve ter pelo menos 10 caracteres.

Então vamos lá, criaremos três atributos nessa classe, referentes ao nome, email e senha. Trabalhamos sempre que possível com atributos privados e acessamos/alteramos seus dados via getters e setters.

```typescript
class User {
  private readonly _name: string;
  private readonly _email: string;
  private readonly _password: string;
}
```

#### 2 - Criando Usuário básico

Teremos agora uma uma função `main ()` que será utilizada apenas como cliente das nossas classes por enquanto. Queremos que essa função instancie um usuário e mostre no console.

Para instanciar e mostrar os dados do objeto como queremos, iremos adicionar um construtor e receber nossos parámetros do cliente.

Lembrando que essa é a forma mais "básica" de se fazer, no próximo tópico iremos refatorar.

User.ts

```typescript
class User {
  private readonly _name: string;
  private readonly _email: string;
  private readonly _password: string;

  constructor(name: string, email: string, password: string) {
    this._name = name;
    this._email = email;
    this._password = password;
  }
}

function main() {
  const user = new User("Matheus", "matheus@dev.com", "senha");

  console.log(user);
}

main();

/**
  Console:

  User: {
    "_name": "Matheus",
    "_email": "matheus@dev.com",
    "_password": "senha"
  }
*/
```

Pronto, temos um usuário sendo criado, mas nenhuma das nossas regras foram implementadas ainda, e esse será nosso próximo passo.

#### 3 - Adicionando regras de usuário a Entity

Antes de criar um usuário, precisamos saber se ele está de acordo com os padrões de criação de usuário, ou seja:

- Nome deve ter mais de 10 caracteres
- E-mail deve ter @ e .edu
- Senha deve ter pelo menos 10 caracteres.

**Faremos da forma mais simples e iremos refatorando nos próximos passos.**

Criaremos as funções que validarão nossas regras. As definições serão `hasMinNameLengthRequired(name: string): boolean`, `hasCorrectEmailFormatRequired(email: string): boolean`, `hasMinPasswordLengthRequired(password: string): boolean` e criaremos um arquivo de user-validations.

user-validations.ts

```typescript
function hasMinNameLengthRequired(name: string): boolean {
  if (name.length < 10) return false;

  return true;
}

function hasCorrectEmailFormatRequired(email: string): boolean {
  const [beforeDomain, afterDomain] = email.split("@");

  if (!beforeDomain || !afterDomain) return false;

  if (afterDomain.search(".edu") === -1) return false;

  return true;
}

function hasMinPasswordLengthRequired(password: string): boolean {
  if (password.length < 10) return false;

  return true;
}
```

E utilizaremos nosso método construtor para validar e lançar um erro caso algum requisito não passe informando qual o problema.

User.ts

```typescript
import {
  hasMinNameLengthRequired,
  hasCorrectEmailFormatRequired,
  hasMinPasswordLengthRequired,
} from "./user-validations";

class User {
  private readonly _name: string;
  private readonly _email: string;
  private readonly _password: string;

  constructor(name: string, email: string, password: string) {
    if (hasMinNameLengthRequired(name)) {
      this._name = name;
    } else throw new Error("Nome muito curto, deve inserir nome e sobrenome.");

    if (hasCorrectEmailFormatRequired(email)) {
      this._email = email;
    } else throw new Error("E-mail inválido.");

    if (hasMinPasswordLengthRequired(password)) {
      this._password = password;
    } else throw new Error("Senha inválida. Muito curta.");
  }
}

function main() {
  const user = new User("Matheus", "matheus@dev.com", "senha");

  console.log(user);
}

main();

/**
  Console:

  [ERR]: Nome muito curto, deve inserir nome e sobrenome.
*/
```

Ok, solucionamos o problema, mas com certeza você deve ter se incomodado com a forma de implementar que utilizei, adicionando vários if's no construtor e validando por ali.

#### 4 - Refatorando, removendo validações do construtor.

A partir de agora, iremos trazer a criação da nossa instância para a core, utilizando um Design Pattern chamado Factory Method.

Com esse design pattern iremos "fabricar" instâncias da nossa classe de dentro da classe.

Para isso utilizaremos um método estático e um construtor privado, já que a classe não será mais instanciada externamente.

Criaremos um método estático chamado `create`, que receberá `name`, `email`, `password`, validará nossas regras de usuário e retornará uma instância de User (em caso de sucesso nas validações).

User.ts

```typescript
import {
  hasMinNameLengthRequired,
  hasCorrectEmailFormatRequired,
  hasMinPasswordLengthRequired,
} from "./user-validations";

class User {
  private readonly _name: string;
  private readonly _email: string;
  private readonly _password: string;

  private constructor(name: string, email: string, password: string) {
    this._name = name;
    this._email = email;
    this._password = password;
  }

  public static create(name: string, email: string, password: string): User {
    if (!hasMinNameLengthRequired(name))
      throw new Error("Nome muito curto, deve inserir nome e sobrenome.");

    if (!hasCorrectEmailFormatRequired(email))
      throw new Error("E-mail inválido.");

    if (!hasMinPasswordLengthRequired(password))
      throw new Error("Senha inválida. Muito curta.");

    return new User(name, email, password);
  }
}

function main() {
  const user = User.create("Matheus", "matheus@dev.com", "senha");

  console.log(user);
}

main();

/**
  Console:

  [ERR]: Nome muito curto, deve inserir nome e sobrenome.
*/
```

Pronto, temos o mesmo resultado, mas uma implementação muito mais clara e até mesmo de leitura mais fácil, já que criamos o usuário por meio de um método estático com nome (`create`) mais descritivo para a funcionalidade de criar usuário do que utilizar `new User`.

#### 4 - Refatorando, criando método validador.

Bom, já temos um resultado funcional e com um código bom para o momento de projeto que temos. Mas por exemplo, se precisarmos validar mais 5 parámatros antes de retornar nossa instância, esse método create vai inchar cada vez mais, já que ele tá tendo como função chamar os validadores um por um.

Criaremos então uma função para centralizar nossos validadores e retornar uma mensagem, em caso de erro.

Dica: para ficar mais fácil a leitura do código, daremos o nome a essa função de `mustAttentionIn`, que significa ao próximo a "deveria se atentar com", e a idéia é que o retorno da função seja exatamente esse ponto de atenção. Assim, nosso código parece "conversar", tornando muito mais simples de se ler no futuro.

user-validations.ts

```typescript
function mustAttentionIn(
  name: string,
  email: string,
  password: string
): string | void {
  if (!hasMinNameLengthRequired(name))
    return "Nome muito curto, deve inserir nome e sobrenome.";

  if (!hasCorrectEmailFormatRequired(email)) return "E-mail inválido.";

  if (!hasMinPasswordLengthRequired(password))
    return "Senha inválida. Muito curta.";
}
```

E aqui no método `create` agora iremos criar uma constante `attentionPoint` e ela receberá o retorno da função `mustAttentionIn` passando nossos parámetros do usuário. Iremos checar se existe algum valor em `attentionPoint`, caso sim, a aplicação lançará uma excessão com o ponto de atenção retornado pela função `mustAttentionIn`. Caso negativo, nosso usuário será criado.

User.ts

```typescript
import { mustAttentionIn } from "./user-validations";

class User {
  private readonly _name: string;
  private readonly _email: string;
  private readonly _password: string;

  private constructor(name: string, email: string, password: string) {
    this._name = name;
    this._email = email;
    this._password = password;
  }

  public static create(name: string, email: string, password: string): User {
    const attentionPoint = mustAttentionIn(name, email, password);

    if (attentionPoint) {
      throw new Error(attentionPoint);
    }

    return new User(name, email, password);
  }
}

function main() {
  const user = User.create("Matheus Costa", "matheus@dev.edu", "senha@dev");

  console.log(user);
}

main();

/**
  Console:

  User: {
    "_name": "Matheus Costa",
    "_email": "matheus@dev.edu",
    "_password": "senha@dev"
  }
*/
```

Chegamos ao nível de código suficiente para o próximo passo do projeto, então siga para o conteúdo número 2 da pasta "Abstração de negócios para código".
