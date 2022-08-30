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

export default User;
