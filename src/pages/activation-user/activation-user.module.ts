import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivationUserPage } from './activation-user';

@NgModule({
  declarations: [
    ActivationUserPage,
  ],
  imports: [
    IonicPageModule.forChild(ActivationUserPage),
  ],
  exports: [
    ActivationUserPage
  ]
})
export class ActivationUserPageModule {}
