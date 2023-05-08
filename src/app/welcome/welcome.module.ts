import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { Home2Component } from './pages/home2/home2.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    Home2Component
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    SharedModule
  ]
})
export class WelcomeModule { }
