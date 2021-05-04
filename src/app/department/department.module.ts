import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeurologyComponent } from './neurology/neurology.component';
import { OpthalmologyComponent } from './opthalmology/opthalmology.component';
import { CardiologyComponent } from './cardiology/cardiology.component';
import { DentalComponent } from './dental/dental.component';
import { TraumatologyComponent } from './traumatology/traumatology.component';
import { GynacologistComponent } from './gynacologist/gynacologist.component';
import { ChildspecialComponent } from './childspecial/childspecial.component';
import { GeneralphysicianComponent } from './generalphysician/generalphysician.component';



@NgModule({
  declarations: [
    NeurologyComponent,
    OpthalmologyComponent,
    CardiologyComponent,
    DentalComponent,
    TraumatologyComponent,
    GynacologistComponent,
    ChildspecialComponent,
    GeneralphysicianComponent
  ],

  exports: [
    NeurologyComponent,
    OpthalmologyComponent,
    CardiologyComponent,
    DentalComponent,
    TraumatologyComponent,
    GynacologistComponent,
    ChildspecialComponent,
    GeneralphysicianComponent
  ],

  imports: [
    CommonModule
  ]
})
export class DepartmentModule { }
