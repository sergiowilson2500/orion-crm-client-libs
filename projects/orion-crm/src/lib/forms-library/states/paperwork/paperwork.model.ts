import { PaperworkAssignment } from "@libShared/models";

export interface IPaperworkStateModel {
    loading: boolean;
    records: PaperworkAssignment[];
    paperworkAssignments : PaperworkAssignment[];
  }

export type IRequestDownloadPaperwork = {
  templateIds: string[];
  formFields?: any[];
};
