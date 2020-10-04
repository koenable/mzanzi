import { TeamsTablesComponent } from './teams-tables.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [TeamsTablesComponent,MatPaginatorModule],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports:[TeamsTablesComponent]
})
export class TeamsTableModule { }
