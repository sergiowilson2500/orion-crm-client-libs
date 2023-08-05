import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PaperworkAssignment } from "@libShared/models";
import { ApiService } from "./api.service";

@Injectable()
export class PaperworkService {

  constructor(private readonly apiService: ApiService) { }

  getAllPaperworkAssignmentsByRep(repId: string | number): Observable<PaperworkAssignment[]> {
    return this.apiService.get<PaperworkAssignment[]>(`/Reps/${repId}/PaperworkAssignments`);
  }

  downloadPaperwork(templateIds: string[], repId: string | number, formFields: any[] = []): Observable<any> {
    const observe: any = 'response';
    return this.apiService.post<any>(`paperworktemplates/rep/${repId}?ids=${templateIds.join(",")}`,
      formFields,
      { observe, responseType: "blob" as "json" }
    );
  }
}
