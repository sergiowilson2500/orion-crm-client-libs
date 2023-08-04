import { OrionRegistrationTypeCategory } from "./enums.model";
import { OrionPlan } from "./orion-plan.model";

export interface RegistrationType {
  id: number;
  name: string;
  requiresQualifiedPlan: boolean;
  isJointAccount: boolean;
  orionRegistrationTypeId: number;
  isQualifiedForBeneficiary: boolean;
  fistname: string;
  lastname: string;
  orionPlans: OrionPlan[];
  custodianId: number;
  category: OrionRegistrationTypeCategory;
  isChecked: boolean;
  hasMinorRegistrationType?: boolean;
}

export interface RegistrationTypeMinimal {
 id: number;
 name: string;
 custodianId: number;
 orionRegistrationTypeId: number;
}
