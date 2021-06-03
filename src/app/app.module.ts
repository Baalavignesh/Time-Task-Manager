import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { HeaderComponent } from './header/header.component';
import { AllGoalsComponent } from './all-goals/all-goals.component';
import { DailyGoalComponent } from './all-goals/daily-goal/daily-goal.component';
import { AgeCalculatorComponent } from './age-calculator/age-calculator.component';
import { AboutComponent } from './header/about/about.component';
import { GoalCardComponent } from './all-goals/goal-card/goal-card.component';
import { FormsModule } from '@angular/forms';


// import {
//   MatButtonModule,
//   MatMenuModule,
//   MatToolbarModule,
//   MatIconModule,
//   MatCardModule
// } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllGoalsComponent,
    DailyGoalComponent,
    AgeCalculatorComponent,
    AboutComponent,
    GoalCardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
