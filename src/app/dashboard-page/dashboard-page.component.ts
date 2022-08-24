import { Component, Input, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
})
export class DashboardPageComponent implements OnInit {
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    console.log(this.adminService.getLoginStatus());
  }
}
