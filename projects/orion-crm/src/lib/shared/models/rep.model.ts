import { SubAdvisor } from "./subadvisor.model";

export interface Rep {
  id: number;
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  repNumber: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  businessPhone: string;
  startDate?: Date;
  isActive: boolean;
  advizrTermsRead: boolean;
  orionRiaName: string;
  aum?: number;
  ytdSales?: number;
  ytdRedemptions?: number;
  orionRepId: number;
  twitterUsername: string;
  subAdvisorId: number;
  imageId: number;
  completedAdvizrTraining: boolean;
  orionWholesalerId: number;
  brokerDealerId: number;
  orionBrokerDealerId: number;
  subAdvisor: SubAdvisor;
  databaseName: string;
  tenantName: string;
  repHeadShot: string;
  allowSelfDirected: boolean;
  userDetailId: number;
  loginUserId: string;
  advisor2bDocumentBlobId: number;
  orionCustodianId?: number;
  brokerDealerName: string;

  custodianId: number;
  registrationTypeId: number;
  custodianName: string;
  registrationName: string;
  taken: boolean;
  selected: boolean;
}
