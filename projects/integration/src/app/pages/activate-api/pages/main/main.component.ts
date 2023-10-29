import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonViewerDialogService } from '../../components/json-viewer';
import { ApiLikeService, ApiPayloadType } from '../../services';

@Component({
  selector: 'main',
  templateUrl: 'main.component.html',
  styleUrls: [`main.component.scss`]
})
export class MainComponent {

  lazyDashboardComponents$: Observable<ApiPayloadType[]> | undefined;
  loaded: boolean | null = null;

  constructor(
    private readonly apiService: ApiLikeService,
    private readonly jsonViewer: JsonViewerDialogService
  ) { }

  load() {
    this.lazyDashboardComponents$ = this.apiService.get();
    this.loaded = true;
  }

  view() {
    this.jsonViewer.OnOpen({ title: 'Api Payload', json: this.apiService.data });
  }

} 
