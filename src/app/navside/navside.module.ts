import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { LocationsComponent } from './locations/locations.component';



@NgModule({
  declarations: [HomeComponent,AboutComponent, ContactComponent,BlogComponent,ServicesComponent, TeamComponent, AppointmentComponent, LocationsComponent],
  exports: [HomeComponent,AboutComponent, ContactComponent,BlogComponent,ServicesComponent, TeamComponent,AppointmentComponent, LocationsComponent],

  imports: [
    CommonModule
  ]
})
export class NavsideModule { }
