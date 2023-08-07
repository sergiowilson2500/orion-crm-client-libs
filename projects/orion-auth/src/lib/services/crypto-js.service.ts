import * as CryptoJS from 'crypto-js';

export class CryptoService {
  constructor(private readonly cryptoKey: string) { }

  public encrypt(s: string): string {
    return this.set(this.cryptoKey, s);
  }

  public decrypt(s: string): string | null {
    return this.get(this.cryptoKey, s);
  }

  public encodeText(s: string): string {
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(s));
  }

  //The set method is use for encrypt the value.
  private set(keys: string, value: string) {
    var key = CryptoJS.enc.Utf8.parse(keys);
    var iv = CryptoJS.enc.Utf8.parse(keys);
    var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key,
      {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });

    return encrypted.toString();
  }

  private get(keys: string, value: string) {
    if (!value) {
      return null;
    }
    var key = CryptoJS.enc.Utf8.parse(keys);
    var iv = CryptoJS.enc.Utf8.parse(keys);
    var decrypted = CryptoJS.AES.decrypt(value, key, {
      keySize: 128 / 8,
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });

    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}
