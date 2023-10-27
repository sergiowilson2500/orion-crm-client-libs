export interface IAsLazyLoadModuleOfBootstrapType<T> {
  boostrapComponent(): { new(...args: any[]): T }
}
