import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CompanyComponent } from './components/company/company.component';


const routes: Routes = [
  { path: '' , component:HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'company', component:CompanyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
