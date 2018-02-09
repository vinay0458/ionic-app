import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { IonicPageModule } from 'ionic-angular';
import { OfferRidePage } from './offerride';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [OfferRidePage],
  imports: [
  	IonicPageModule.forChild(OfferRidePage),
    AgmCoreModule.forRoot({
      libraries: ["places"]
    }),
    FormsModule,
    ReactiveFormsModule
   
  ],
  entryComponents: [OfferRidePage]
})




export class OfferRidePageModule {}
