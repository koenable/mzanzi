import { TeamsPageRoutingRoutingModule } from './teams-page-routing.module';
import { TeamsPageComponent } from './teams-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [TeamsPageComponent],
  imports: [
    CommonModule,
    TeamsPageRoutingRoutingModule,
    MatGridListModule,MatCardModule
  ]
})
export class TeamsPageModuleModule { }
