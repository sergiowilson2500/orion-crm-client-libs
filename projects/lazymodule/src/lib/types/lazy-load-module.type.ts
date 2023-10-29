
export interface IAsLazyLoadModuleOfBootstrapType<T> { boostrapComponent(): { new(...args: any[]): T } }
export interface IAsLazyLoadedModule { boostrapComponent(): { new(...args: any[]): any } }
