import { PaperworkAssignment } from "@libShared/models";

export interface IPaperworkStateModel {
  busyId: string
  loading: boolean;
  records: PaperworkAssignment[];
  paperworkAssignments: PaperworkAssignment[];
}

export type IRequestDownloadPaperwork = {
  templateIds: string[];
  formFields?: any[];
};
