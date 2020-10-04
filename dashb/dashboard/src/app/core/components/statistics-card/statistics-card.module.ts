import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import  {MatMenuModule} from '@angular/material/menu';
import { StatisticsCardComponent } from './statistics-card.component';



@NgModule({
  declarations: [StatisticsCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [StatisticsCardComponent]

})
export class StatisticsCardModule { }