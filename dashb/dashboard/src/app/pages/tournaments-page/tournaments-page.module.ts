import { TournamentsPageComponent } from './tournaments-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournamentsPageRoutingModule } from './tournaments-page-routing.module';

@NgModule({
  declarations: [TournamentsPageComponent],
  imports: [
    CommonModule,
    TournamentsPageRoutingModule
  ]
})
export class TournamentsPageModule { }
