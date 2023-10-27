import { JsonViewerDialogComponent, JsonViewerDialogService } from "./json-viewer";

export function getComponents(){
    return [
      JsonViewerDialogComponent
    ]
}

export function getProviders() {
  return [
    JsonViewerDialogService
  ];
}
