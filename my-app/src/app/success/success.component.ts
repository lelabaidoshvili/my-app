import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  successText: string = 'You are so successfull!!!'
  removeText: string = 'This is a button'
  constructor() { }

  ngOnInit(): void {
  }

}
