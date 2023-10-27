import { Injectable } from "@angular/core";
import { LazyLoadBroker } from '@mods/lazy/utils';
import { LoadTypeKey } from '@mods/lazy/types'
import { Observable, of } from "rxjs";

export type ApiPayloadType = { key: LoadTypeKey, params: any }

export const ApiPayloadExample: ApiPayloadType[] = [
  { key: LazyLoadBroker.Financial, params: { id: 777 } },
  { key: LazyLoadBroker.MarketSummary, params: null }
]

@Injectable()
export class ApiLikeService {

  get data() {
    return ApiPayloadExample;
  }

  get(): Observable<ApiPayloadType[]> {
    return of(ApiPayloadExample);
  }

}
