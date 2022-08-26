import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { AllStudentComponent } from './all-student/all-student.component';
import { ContainerComponent } from './container/container.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FallbackComponent } from './fallback/fallback.component';
import { HeroPageComponent } from './hero-page/hero-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminService } from './services/admin.service';
import { LoginGuardGuard } from './services/login-guard.guard';
import { WithBalanceComponent } from './with-balance/with-balance.component';
import { WithoutBalanceComponent } from './without-balance/without-balance.component';

const routes: Routes = [
  {
    path: '',
    component: HeroPageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'all-students',
    component: AllStudentComponent,
    canActivate: [LoginGuardGuard],
  },
  {
    path: 'students-with-balance',
    canActivate: [LoginGuardGuard],
    component: WithBalanceComponent,
  },
  {
    path: 'students-without-balance',
    canActivate: [LoginGuardGuard],
    component: WithoutBalanceComponent,
  },
  {
    path: 'add-student',
    canActivate: [LoginGuardGuard],
    component: AddStudentComponent,
  },
  {
    path: 'fallback',
    canActivate: [LoginGuardGuard],
    component: FallbackComponent,
  },
  {
    path: '**',
    component: ErrorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
