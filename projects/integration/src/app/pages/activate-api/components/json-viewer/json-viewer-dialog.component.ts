import { Inject, Component, AfterContentInit, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';

export type JsonViewerDialogParams = {title?: string; json: any}
export type JsonViewerDialogResponse = { }

@Component({
    selector: 'json-viewer-dialog',
    templateUrl: 'json-viewer-dialog.component.html',
    styleUrls: [`json-viewer-dialog.component.scss`]
  })
export class JsonViewerDialogComponent {

    constructor(
      @Inject(MAT_DIALOG_DATA) public readonly data: JsonViewerDialogParams,
      private readonly dialogRef: MatDialogRef<JsonViewerDialogComponent>,
    ) {
    }

  get dialogParams() {
    return this.data;
  }

    close(){
      this.dialogRef.close();
    }
   
  
  } 
