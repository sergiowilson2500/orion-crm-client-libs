
import { Injectable } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { filter } from "rxjs";
import { JsonViewerDialogComponent, JsonViewerDialogParams, JsonViewerDialogResponse } from './json-viewer-dialog.component';

@Injectable()
export class JsonViewerDialogService {

  constructor(private readonly dialog: MatDialog) { }

  OnOpen(params: JsonViewerDialogParams): Observable<JsonViewerDialogResponse> {
    const dialogInstance = this.dialog.open(JsonViewerDialogComponent, {
      width: '600px',
      data: params,
      disableClose: false
    });
    return dialogInstance.afterClosed().pipe(filter(x => !!x));
  }
}
