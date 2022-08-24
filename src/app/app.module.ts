import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { HeroPageComponent } from './hero-page/hero-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { StudentWrapperComponent } from './student-wrapper/student-wrapper.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { FallbackComponent } from './fallback/fallback.component';
import { FormsModule } from '@angular/forms';
import { WithBalanceComponent } from './with-balance/with-balance.component';
import { WithoutBalanceComponent } from './without-balance/without-balance.component';
import { AllStudentComponent } from './all-student/all-student.component';
import { FeeBalancePipe } from './pipes/fee-balance.pipe';
import { ClassNamePipe } from './pipes/class-name.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    HeroPageComponent,
    LoginPageComponent,
    DashboardPageComponent,
    StudentWrapperComponent,
    AddStudentComponent,
    FallbackComponent,
    WithBalanceComponent,
    WithoutBalanceComponent,
    AllStudentComponent,
    FeeBalancePipe,
    ClassNamePipe,
    CapitalizePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
