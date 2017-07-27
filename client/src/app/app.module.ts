import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from "angular2-materialize";

import { AppComponent } from './app.component';
import { VotingDashboardComponent } from './voting-dashboard/voting-dashboard.component';

import { BackEndCallsService } from  './services/back-end-calls.service';
import { NewFruitFormComponent } from './new-fruit-form/new-fruit-form.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogInComponent } from './log-in/log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    VotingDashboardComponent,
    NewFruitFormComponent,
    FruitListComponent,
    NavbarComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [BackEndCallsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
