import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [AdminService],
})
export class LoginPageComponent implements OnInit {
  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {}

  email: string = '';
  password: string = '';

  // admin!: User;
  isLoggedIn: any;

  validateUser(): void {
    this.isLoggedIn = this.adminService.validateUser(this.email, this.password);
  }
}
