import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-with-balance',
  templateUrl: './with-balance.component.html',
  styleUrls: ['./with-balance.component.css'],
})
export class WithBalanceComponent implements OnInit {
  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    if (this.students.length == 0) {
      this.router.navigate(['fallback']);
    }
  }

  students = this.adminService.getStudentsWithBalance();
}
