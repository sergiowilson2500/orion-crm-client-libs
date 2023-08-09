# @orion

## Getting Started

```
import { OrionAuthModule } from '@ngjoy/orion-auth';
import { OrionCrmFormsLibraryModule } from '@ngjoy/orion-crm';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //...
    OrionAuthModule.forRoot(),
    OrionCrmFormsLibraryModule.forRoot({ api: environment.api.url }),
    //...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
