import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  @Input() x: string =''
  changeText = true;
 
   
  constructor() {
    
  }

  ngOnInit(): void {
  }

  onRemoveText() {
  this.changeText = !this.changeText
  }

  
}

