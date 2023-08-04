import { BrokerDealer } from "./broker-dealer.model";
import { Custodian } from "./custodian.model";
import { PaperworkCategoryTypeDto } from "./paperwork-category.model";
import { Platform } from "./platform.model";
import { RegistrationType } from "./registration-type.model";
import { Rep } from "./rep.model";

export interface PaperworkAssignment {
  id: number | null;
  name: string | null;
  paperworkTemplateId: string | null;
  paperworkTemplateName: string | null;
  custodianId: number | null;
  registrationTypeId: number | null;
  brokerDealerId: number | null;
  repId: number | null;
  platformId: number | null;
  hidesPaperworkTemplateId: string | null;
  newAccountPaperworkCategoryTypeId: number | null;
  formsLibraryPaperworkCategoryTypeId: number | null;
  priority: number;
  custodian: Custodian;
  platform: Platform;
  registrationType: RegistrationType;
  brokerDealer: BrokerDealer;
  rep: Rep;
  isClientFormLibrary: boolean;
  isFormsLibraryDocusignEnabled: boolean;
  isHTML: boolean;
  html: string;
  disabledRoles: string;
  hiddenRoles: string;
  formsLibraryUnauthorizedCustodian: boolean;
  editedDate: Date;
  editedBy: string;

  custodians: Custodian[];
  registrationTypes: RegistrationType[];
  paperworkCategoryTypes: PaperworkCategoryTypeDto[];
  serviceRequestTopic: string;
  serviceRequestSubTopic: string;
  isMasterDisplay: boolean;

  orionRegistrationId: number;
  orionRepId: number;
  orionHouseholdId: number;
  accountId: string;
  accountCode: string;
  topic: string;
  isOptional: boolean;
  orionBrokerDealerId: number;
  wealthAdvisory: boolean;
}
