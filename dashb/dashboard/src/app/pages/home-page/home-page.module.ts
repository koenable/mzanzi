import { StatisticsCardModule } from './../../core/components/statistics-card/statistics-card.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { MatProgressBarModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    MatProgressBarModule,
    MatGridListModule,
    StatisticsCardModule
    ]
})
export class HomePageModule { }
