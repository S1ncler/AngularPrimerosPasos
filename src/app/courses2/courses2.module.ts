import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Courses2RoutingModule } from './courses2-routing.module';
import { ListCoursesComponent } from './pages/list-courses/list-courses.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListCoursesComponent
  ],
  imports: [
    CommonModule,
    Courses2RoutingModule,
    SharedModule
  ]
})
export class Courses2Module { }
