import { HttpBackend, HttpClient, HttpContext, HttpEvent, HttpHeaders, HttpParams } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { formsLibraryConfig, FORMS_LIBRARY_CONFIG } from "../configs";
import { AuthState } from "../states/auth/auth.state";

export type HttpApiServiceParams = {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  context?: HttpContext;
  observe?: 'body';
  params?: HttpParams | {
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
  };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}

@Injectable()
export class ApiService {

  private readonly basePath = this.config.api;
  private readonly httpClient = new HttpClient(this.httBackendHandler);

  constructor(
    private readonly store: Store,
    private readonly httBackendHandler: HttpBackend,
    @Inject(FORMS_LIBRARY_CONFIG) private readonly config: formsLibraryConfig
  ) {
  }

  private getHeaders() {
    const token = this.store.selectSnapshot(AuthState.getUserToken);
    const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return { headers: header };
  }

  public get<T>(url: string, options: HttpApiServiceParams = {}): Observable<T> {
    const headerOptions = this.getHeaders();
    let httpOptions = { ...options, ...headerOptions };
    return this.httpClient.get<T>(`${this.basePath}/${url}`, httpOptions);
  }

  public post<T>(url: string, body: any, options: HttpApiServiceParams = {}): Observable<T> {
    const headerOptions = this.getHeaders();
    let httpOptions = { ...options, ...headerOptions };
    return this.httpClient.post<T>(`${this.basePath}/${url}`, body, httpOptions);
  }
}
