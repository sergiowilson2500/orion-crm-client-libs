import { Store, State, Selector, StateContext, Action, NgxsOnInit } from '@ngxs/store';
import { IAuthStateModel } from './auth.model';
import { AuthActions } from './auth.actions';
import { Inject, Injectable } from '@angular/core';
import { OrionAuthConfiguration, ORION_CRM_TOKEN } from '../../config/injection-token';
import { LoginUser } from '../../models';
import { CryptoService } from '../../services';


@State<IAuthStateModel>({
  name: 'auth',
  defaults: <IAuthStateModel>{
    loading: true,
    authenticated: false,
    user: null,
    repId: null,
    orionRepId: null,
    authToken: null,
    records: [],
  }
})
@Injectable()
export class AuthState implements NgxsOnInit {


  constructor(
    @Inject(ORION_CRM_TOKEN) private readonly config: OrionAuthConfiguration,
    private readonly cryptoService: CryptoService
  ) { }

  ngxsOnInit(ctx: StateContext<any>): void {
    if (this.config.storageKey) {
      const userSession = localStorage.getItem(this.config.storageKey);
      if (userSession) {
        const decrypted = this.cryptoService.decrypt(userSession);
        if (decrypted) {
          const user = this.getUserFromJson(decrypted);
          console.log(user);
          ctx.patchState({ user, authenticated: true })
        }
      }
    }
  }
  private getUserFromJson(userJson: string): LoginUser {
    let parsedUser = JSON.parse(userJson) as LoginUser;
    const { token, claims } = parsedUser;
    const user = { ...new LoginUser(), token, claims } as LoginUser
    return user;
  }

  @Selector()
  static IsLoading(state: IAuthStateModel): boolean {
    return state.loading;
  }

  @Selector()
  static getUserToken(state: IAuthStateModel): string | undefined {
    return state.user?.token
  }

  @Selector()
  static IsAuthenticated(state: IAuthStateModel): boolean {
    return state.authenticated;
  }

  @Selector()
  static getRepId(state: IAuthStateModel): string | number | null {
    return state.repId;
  }

  @Selector()
  static getOrionRepId(state: IAuthStateModel): string | number | null {
    return state.orionRepId;
  }

  @Action(AuthActions.Done)
  onDone(ctx: StateContext<IAuthStateModel>) {
    ctx.patchState({
      loading: false
    });
  }

  @Action(AuthActions.Loading)
  onLoading(ctx: StateContext<IAuthStateModel>) {
    ctx.patchState({
      loading: true
    });
  }

  @Action(AuthActions.UpdateAuthStatus)
  onUpdateStatus(ctx: StateContext<IAuthStateModel>, action: AuthActions.UpdateAuthStatus) {
    if (this.config.storageKey) {
      const userSession = localStorage.getItem(this.config.storageKey);
      if (userSession) {
        const decrypted = this.cryptoService.decrypt(userSession);
        if (decrypted) {
          const user = this.getUserFromJson(decrypted);
          const repId = user?.claims?.entityId;
          const orionRepId = user?.claims?.oas_entityId;
          ctx.patchState({ user, repId, orionRepId, authenticated: true })
        }
      }
    }
  }

}
