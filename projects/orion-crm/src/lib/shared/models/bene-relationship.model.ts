export interface IBenficiaryRelationship {
  id: number;
  custodianId: number;
  relationshipName: string;
  enabled: boolean;
  removed?: boolean;
  isBeingEdited?: boolean;
}
