import { IBenficiaryRelationship } from "./bene-relationship.model";
import { Occupation } from "./ocupation.model";
import { RegistrationType } from "./registration-type.model";

export interface Custodian {
  id: number;
  orionId: number;
  name: string;
  code: string;
  isNewAccounts: boolean;
  isDocuSign: boolean;
  isPaperless: boolean;
  isEsignDownload: boolean;
  useAccountNubmers: boolean;
  isDownloadPdf: boolean;
  isTransferData: boolean;
  accountNumbers: string;
  registrationTypes: RegistrationType[];
  isDocuSignCustodialInboxRequired: boolean;
  maxPrimaryBeneficiary: number;
  maxContingentBeneficiary: number;
  maxCombinedBeneficiary: number;
  useMaxCombinedBeneficiary: boolean;
  allowFundingBankTransfer: boolean;
  allowFundingInvestmentAccount: boolean;
  allowFundingStandingInstructions: boolean;
  allowMonthOnlyForStartDateDistribution: boolean;
  allowOtherInACATDeliveryFirms: boolean;
  investmentAccountSecuritiesLimit: number;
  allowedBeneficiaryRelationshipTypes: IBenficiaryRelationship[];
  enableIndentificationTypeAttachment: boolean;
  requireIndentificationTypeAttachment: boolean;
  enableStandingInstructionsAttachment: boolean;
  requireStandingInstructionsAttachment: boolean;
  enableInvestmentAccountAttachment: boolean;
  requireInvestmentAccountAttachment: boolean;
  enableBankTransferAttachment: boolean;
  requireBankTransferAttachment: boolean;
  manualAccountNumberAssignment: boolean;
  enableRegistrationSpecificAttachment: boolean;
  loading: boolean;
  isDocusignVisibility: boolean;
  isAllowSpecificDaySystematicWithdrawal: boolean;
  allowStirpes: boolean;
  allowInvestmentSecuritiesLimit: boolean;
  excludeCommaOnNameFields: boolean;
  defaultPlatformId: number;
  defaultFundFamilyId: number;
  enablePreSetOccupationList: boolean;
  occupations: Occupation[];
}

export interface CustodianMinimal {
  id: number;
  name: string;
  orionId: number;
}
