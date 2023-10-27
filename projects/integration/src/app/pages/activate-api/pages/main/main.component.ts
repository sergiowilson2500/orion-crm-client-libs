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

  lazyDashboardComponents$: Observable<ApiPayloadType[]> = this.apiService.get();

  constructor(
    private readonly apiService: ApiLikeService,
    private readonly jsonViewer: JsonViewerDialogService
  ) { }

  viewApiPayload() {
    this.jsonViewer.OnOpen({ title: 'Api Payload', json: this.apiService.data });
  }

} 
