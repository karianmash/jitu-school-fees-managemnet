import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrls: ['./all-student.component.css'],
})
export class AllStudentComponent implements OnInit {
  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    if (this.students.length == 0) {
      this.router.navigate(['fallback']);
    }
  }

  students = this.adminService.getAllStudents();
}
