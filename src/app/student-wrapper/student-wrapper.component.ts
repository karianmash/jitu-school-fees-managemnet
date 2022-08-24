import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-wrapper',
  templateUrl: './student-wrapper.component.html',
  styleUrls: ['./student-wrapper.component.css'],
})
export class StudentWrapperComponent implements OnInit {
  constructor() {}

  @Input() studentDetails: any;

  ngOnInit(): void {}
}
