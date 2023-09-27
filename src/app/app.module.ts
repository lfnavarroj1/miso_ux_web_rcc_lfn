import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderAppComponent } from './header-app/header-app.component';
import { UsersModule } from './users/users.module';
import { UserRoutingModule } from './users/user-routing.module';
import { FormulasRoutingModule } from './formulas/formulas-routing.module';
import { FormulasModule } from './formulas/formulas.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderAppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    FormulasModule,
    UserRoutingModule,
    FormulasRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
