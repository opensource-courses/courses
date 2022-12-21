export default interface IEncryptManager {
  encrypt(raw: string): Promise<string>;
  compare(raw: string, hashed: string): Promise<boolean>;
}
