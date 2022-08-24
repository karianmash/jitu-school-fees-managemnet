import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private adminService: AdminService) {}

  isLoggedIn!: boolean | undefined;
  // show!: boolean;
  show = true;

  ngOnInit(): void {
    this.isLoggedIn = this.adminService.getLoginStatus();
    console.log(this.isLoggedIn);

    if (this.isLoggedIn === true) {
      this.show = true;
    } else {
      this.show = false;
    }
  }

  logout() {
    this.adminService.logout();
  }
}
