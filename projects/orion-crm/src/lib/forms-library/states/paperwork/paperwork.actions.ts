import { IRequestDownloadPaperwork } from "./paperwork.model";

export namespace PaperworkActions {
  export class Loading {
    static type = '[Paperwork] Loading';
  }

  export class Done {
    static type = '[Paperwork] Set As Done';
  }

  export class GetElementsByRep {
    static type = '[Paperwork] Get Elements by Rep';
  }

  export class AggragateList {
    static type = '[Paperwork] Aggragate List';
  }

  export class DownloadPaperwork {
    static type = '[Paperwork] Download Paperwork';
    constructor(public readonly request: IRequestDownloadPaperwork) { }
  }

  export class SetBusyId {
    static type = '[Paperwork] Set Busy Id';
    constructor(public readonly id: string) { }
  }
}



