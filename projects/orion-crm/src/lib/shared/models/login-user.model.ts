import { EntitiesEnum } from "../models/enums.model";


export class LoginUser {

  // these are the only properties that get serialized
  public token!: string;
  public claims: any;

  public entityId(): number {
    return Number(this.claims.entityId);
  }

  public oasentityId(): number {
    return Number(this.claims.oas_entityId);
  }

  public entityIds(): number[] {
    if (this.claims.entityIds) {
      return JSON.parse(this.claims.entityIds);
    }
    else {
      return [this.entityId()];
    }
  }


  public eclipseFirmId(): number | null {
    if (this.claims.eclipseFirmId) {
      return Number(this.claims.eclipseFirmId);
    }
    else {
      return null;
    }
  }

  public databases(): any[] | null {
    if (this.claims.databases) {
      return (JSON.parse(this.claims.databases)).sort((a: any, b: any) => a.name < b.name ? -1 : (a.name > b.name ? 1 : 0));
    }
    else {
      return null;
    }
  }





  public orionEntityId(): number {
    return Number(this.claims.oas_entityId);
  }

  public tenantId(): number {
    if (Array.isArray(this.claims.tenantId)) {
      let tenantArray: number[] = this.claims.tenantId;
      return tenantArray[tenantArray.length - 1];
    }
    return Number(this.claims.tenantId);
  }

  public tenantCode(): string {
    if (Array.isArray(this.claims.tenantCode)) {
      var claimsArray: string[] = this.claims.tenantCode;
      return claimsArray[claimsArray.length - 1];
    }
    return this.claims.tenantCode;
  }

  public tenantGuid(): string {
    return this.claims.tenantGuid;
  }

  public elementCode(): string {
    return this.claims.elementCode;
  }

  public two_factor_options(): any[] | null {
    if (this.claims.two_factor_options) {
      let retVal: any[] = JSON.parse(this.claims.two_factor_options);
      return retVal;
    }
    else {
      return null;
    }
  }

  public oas_token(): string {
    return this.claims.oas_token;
  }

  public isRep(): boolean {
    return this.claims.entity === "4";
  }

  public isAdvisor(): boolean {
    return this.claims.entity === "4";
  }

  public isBrokerDealer(): boolean {
    return this.claims.entity === "2";
  }

  public isHousehold(): boolean {
    return this.claims.entity === "5";
  }

  public isAdmin(): boolean {
    return (this.claims.entity === "17" || this.claims.entity === "50");
  }
  public isOriginalAdmin(): boolean {
    return (this.claims.original_entity === "17" || this.claims.original_entity === "50");
  }

  public isWholesaler(): boolean {
    return this.claims.entity === "3";
  }

  public isCtcUser(): boolean {
    return this.claims.entity == "99"
  }

  public hasClaim(claimName: string) {
    return this.claims[claimName] ? true : false;
  }

  public canAccessEntity(entityLevel: EntitiesEnum) {

    switch (entityLevel) {
      case EntitiesEnum.BrokerDealer:
        return (this.isWholesaler() || this.isAdmin())
      case EntitiesEnum.Rep:
      case EntitiesEnum.Advisor:
        return (this.isBrokerDealer() || this.isWholesaler() || this.isAdmin())
      case EntitiesEnum.Portfolio:
        return true;
    }

    return false;

  }

  public getBooleanClaimVal(claimValue: string): boolean {
    if (this.claims[claimValue]) {
      let val = String(this.claims[claimValue]).toLowerCase();
      return val === 'true';
    }
    return false;
  }

  constructor() { }
}
