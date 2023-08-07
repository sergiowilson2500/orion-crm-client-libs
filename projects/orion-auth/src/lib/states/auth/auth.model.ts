import { LoginUser } from "../../models";

export interface IAuthStateModel {
  loading: boolean;
  records: any[];
  user: LoginUser | null;
  repId: string | number | null;
  orionRepId: string | number | null;
  authToken: string | null;
  authenticated: boolean;
}
