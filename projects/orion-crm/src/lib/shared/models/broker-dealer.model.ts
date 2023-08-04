import { Custodian } from "./custodian.model";

export interface BrokerDealer {
  id: number;
  orionId: number;
  name: string;
  isCoAdvisory: boolean;
  attachProposalToEsign: boolean;
  email: string;
  avatarImage: string;
  imageId: any;
  advizrTermsRead: boolean;
  custodians: Custodian[];
  isBeingEdited: boolean;
}
