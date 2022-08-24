import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-without-balance',
  templateUrl: './without-balance.component.html',
  styleUrls: ['./without-balance.component.css'],
})
export class WithoutBalanceComponent implements OnInit {
  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    if (this.students.length == 0) {
      this.router.navigate(['fallback']);
    }
  }

  students = this.adminService.getStudentsWithoutBalance();
}
