import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YourridePage } from './yourride';

@NgModule({
  declarations: [
    YourridePage,
  ],
  imports: [
    IonicPageModule.forChild(YourridePage),
  ],
})
export class YourridePageModule {}
