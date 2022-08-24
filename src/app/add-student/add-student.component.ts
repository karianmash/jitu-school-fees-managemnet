import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    console.log(this.adminService.getLoginStatus());
  }

  firstName: string = '';
  lastName: string = '';
  classNumber: string = '';
  balance = '';

  student: any;
  isEmpty = false;
  invalidClass = false;
  negativeBalance = false;

  addStudent() {
    if (
      this.firstName !== '' ||
      this.lastName !== '' ||
      this.classNumber !== '' ||
      this.balance !== ''
    ) {
      this.validateClass(parseInt(this.classNumber));

      this.validateBalance(parseFloat(this.balance));

      if (this.invalidClass === false && this.negativeBalance === false) {
        this.student = this.adminService.addStudent(
          this.firstName,
          this.lastName,
          this.classNumber,
          this.balance
        );
      }
    } else {
      this.isEmpty = true;
    }
  }

  validateClass(classNumber: number): boolean {
    if (classNumber <= 0 || classNumber > 8) {
      return (this.invalidClass = true);
    }
    return (this.invalidClass = false);
  }

  validateBalance(balance: number): boolean {
    if (balance < 0) {
      return (this.negativeBalance = true);
    }
    return (this.negativeBalance = false);
  }
}
