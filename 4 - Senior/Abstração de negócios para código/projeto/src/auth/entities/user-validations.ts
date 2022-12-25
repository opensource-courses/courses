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

export function mustAttentionIn(
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
