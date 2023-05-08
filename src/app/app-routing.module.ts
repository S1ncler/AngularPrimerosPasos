import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { WelcomeRoutingModule } from './welcome/welcome-routing.module';
import { Courses2Module } from './courses2/courses2.module';
import { Courses2RoutingModule } from './courses2/courses2-routing.module';

const routes: Routes = [
  {
    path: "welcome",
    loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule)
  },
  {
    path: "courses2",
    loadChildren: () => import('./courses2/courses2.module').then(m => m.Courses2Module)
  }
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    Courses2RoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
