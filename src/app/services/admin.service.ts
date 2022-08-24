import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';
import { ClassNamePipe } from '../pipes/class-name.pipe';
import { Student } from '../interfaces/student';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private router: Router) {}

  email = 'ianmachariak17@gmail.com';
  password = '12345';

  isLoggedIn =
    JSON.parse(localStorage.getItem('isLoggedIn') as string) || false;

  // students: Student[] = [
  //   { name: 'Ian Macharia', class: '8', balance: 1250 },
  //   { name: 'Amos Mwangi', class: '2', balance: 0 },
  //   { name: 'Jane Racheal', class: '6', balance: 960 },
  // ];

  students: Student[] = [];

  validateUser(email: string, password: string) {
    if (email === this.email && password === this.password) {
      this.isLoggedIn = true;

      localStorage.setItem('isLoggedIn', JSON.stringify(this.isLoggedIn));

      this.router.navigate(['/all-students']);

      return this.isLoggedIn;
    } else {
      this.isLoggedIn = false;

      return this.isLoggedIn;
    }
  }

  getLoginStatus() {
    return JSON.parse(localStorage.getItem('isLoggedIn') as string);
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/']);
  }

  getAllStudents() {
    return this.students;
  }

  getStudentsWithBalance() {
    if (this.students.length > 0) {
      return this.students.filter((student) => {
        return student.balance > 0;
      });
    } else {
      return this.students;
    }
  }

  getStudentsWithoutBalance() {
    if (this.students.length > 0) {
      return this.students.filter((student) => {
        return student.balance === 0;
      });
    } else {
      return this.students;
    }
  }

  // Add student
  addStudent(
    fName: string,
    lName: string,
    cNumber: string,
    feeBalance: string
  ) {
    let name = fName + ' ' + lName;

    let student = {
      name,
      class: cNumber,
      balance: parseInt(feeBalance),
    };

    this.students.push(student);
    this.router.navigate(['/all-students']);
  }
}
