import { PageOneComponent } from './page-one.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
PageOneComponent

const routes: Routes = [{path: '', component: PageOneComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageOneRoutingModule { }
