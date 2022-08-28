import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { LocationsComponent } from './locations/locations.component';
import { AddLocationComponent } from './add-location/add-location.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



const appRoute: Routes = [
  {path:'', component: OverviewComponent},
  {path:'overview', component: OverviewComponent},
  {path:'**', component: OverviewComponent},
  {path:'locations', component: LocationsComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    LocationsComponent,
    AddLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddLocationComponent]
})
export class AppModule { }
