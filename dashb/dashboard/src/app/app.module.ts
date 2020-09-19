import { PageThreeModule } from './pages/page-three/page-three.module';
import { PageTwoModule } from './pages/page-two/page-two.module';
import { PageOneModule } from './pages/page-one/page-one.module';
import { SidenavModule } from './components/sidenav/sidenav.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './pages/login/login.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidenavModule,
    LoginModule,
    PageOneModule,
    PageTwoModule,
    PageThreeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
