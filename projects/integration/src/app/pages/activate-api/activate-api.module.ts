
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getAllModuleComponents } from './components/all';
import { getAllModulePages } from './pages/all';
import { ActivateApiRoutingModule } from './activate-api.routing.module';
import { MaterialComponentsModule } from '../materialcomponents.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: 
    [
        ActivateApiComponent,
        ...getAllModuleComponents(), 
        ...getAllModulePages()
    ],
    imports: [ 
        CommonModule,
        ActivateApiRoutingModule,
        SharedModule,
        MaterialComponentsModule,
    ],
    
})
export class ActivateApiModule {}