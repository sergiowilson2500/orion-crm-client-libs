import { Store, State, Selector, StateContext, Action, NgxsOnInit } from '@ngxs/store';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { IAuthStateModel } from './auth.model';
import { AuthActions } from './auth.actions';
import { tap, timeout, mergeMap } from 'rxjs/operators';
import { Inject, Injectable } from '@angular/core';
import { formsLibraryConfig, FORMS_LIBRARY_CONFIG } from '../../configs/injection-token';
import { CryptoService } from '@libShared/services';
import { LoginUser } from '@libShared/models';


@State<IAuthStateModel>({
  name: 'auth',
  defaults: <IAuthStateModel>{
    loading: true,
    authenticated: false,
    user: null,
    repId: null,
    authToken: null,
    records: [],
  }
})
@Injectable()
export class AuthState implements NgxsOnInit {

  private readonly httpClient: HttpClient = new HttpClient(this.httBackendHandler);

  constructor(
    @Inject(FORMS_LIBRARY_CONFIG) private readonly config: formsLibraryConfig,
    private readonly httBackendHandler: HttpBackend,
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
    return state.user?.claims?.oas_entityId;
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
          ctx.patchState({ user, repId, authenticated: true })
        }
      }
    }
  }

}
