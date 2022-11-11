import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorText: string = "Error!!!"
  removeText: string = 'This is a button'

  getErrorText() {
    return this.errorText
  }


  constructor() { }

  ngOnInit(): void {
  }

}
