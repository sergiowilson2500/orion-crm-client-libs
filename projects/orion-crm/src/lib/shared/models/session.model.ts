import { EventEmitter } from 'events';

export class Session {

  public change: EventEmitter = new EventEmitter();

  private _accountId!: number;
  public get accountId(): number {
    return this._accountId;
  }
  public set accountId(val: number) {
    this._accountId = val;
    this.change.emit('change', this);
  }


  private _brokerDealerId!: number;
  public get brokerDealerId(): number {
    return this._brokerDealerId;
  }
  public set brokerDealerId(val: number) {
    this._brokerDealerId = val;
    this.change.emit('change', this);
  }


  private _contextEntity!: number;
  public get contextEntity(): number {
    return this._contextEntity;
  }
  public set contextEntity(val: number) {
    this._contextEntity = val;
    this.change.emit('change', this);
  }

  private _newhouseholdId!: number;
  public get newhouseholdId(): number {
    return this._newhouseholdId;
  }
  public set newhouseholdId(val: number) {
    this._newhouseholdId = val;
    this.change.emit('change', this);
  }


  private _portfolioId!: number;
  public get portfolioId(): number {
    return this._portfolioId;
  }
  public set portfolioId(val: number) {
    this._portfolioId = val;
    this.change.emit('change', this);
  }

  private _repId!: number;
  public get repId(): number {
    return this._repId;
  }
  public set repId(val: number) {
    this._repId = val;
    this.change.emit('change', this);
  }

  private _wholesalerId!: number;
  public get wholesalerId(): number {
    return this._wholesalerId;
  }
  public set wholesalerId(val: number) {
    this._wholesalerId = val;
    this.change.emit('change', this);
  }

}
