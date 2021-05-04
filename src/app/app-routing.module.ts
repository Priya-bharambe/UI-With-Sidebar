import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NeurologyComponent } from './department/neurology/neurology.component';
import { OpthalmologyComponent } from './department/opthalmology/opthalmology.component';
import { GynacologistComponent } from './department/gynacologist/gynacologist.component';
import { CardiologyComponent } from './department/cardiology/cardiology.component';
import { DentalComponent } from './department/dental/dental.component';
import { TraumatologyComponent } from './department/traumatology/traumatology.component';
import { HomeComponent } from './navside/home/home.component';
import { AboutComponent } from './navside/about/about.component';
import { ContactComponent } from './navside/contact/contact.component';
import { BlogComponent } from './navside/blog/blog.component';
import { ServicesComponent } from './navside/services/services.component';
import { TeamComponent } from './navside/team/team.component';
import { AppointmentComponent } from './navside/appointment/appointment.component';
import { LocationsComponent } from './navside/locations/locations.component';
import { ChildspecialComponent } from './department/childspecial/childspecial.component';
import { GeneralphysicianComponent } from './department/generalphysician/generalphysician.component';






const routes: Routes = [
  {path: 'neurology', component: NeurologyComponent},
  {path: 'opthalmology', component: OpthalmologyComponent},
  {path: 'gyno', component: GynacologistComponent},
  {path: 'cardiology', component: CardiologyComponent},
  {path: 'dental', component: DentalComponent},
  {path: 'traumatology', component: TraumatologyComponent},
  {path: '', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'blog', component:BlogComponent},
  {path: 'services', component:ServicesComponent},
  {path: 'team', component:TeamComponent},
  {path: 'appointment', component:AppointmentComponent},
  {path: 'locations', component: LocationsComponent},
  {path: 'childspecial', component:ChildspecialComponent},
  {path: 'generalphysicain', component:GeneralphysicianComponent}





  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
