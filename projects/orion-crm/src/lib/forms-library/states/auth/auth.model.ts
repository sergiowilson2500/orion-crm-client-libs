import { LoginUser } from "@libShared/models";

export interface IAuthStateModel {
  loading: boolean;
  records: any[];
  user: LoginUser | null;
  repId: string | number | null;
  authToken: string | null;
  authenticated: boolean;
}
