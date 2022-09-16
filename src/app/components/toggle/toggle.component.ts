import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  @Input() text = 'Busy';
  clicked: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.clicked = ! this.clicked;
    if(this.text === 'Busy'){
      this.text = 'Closed'
    }else{
      this.text = 'Busy';
    }
  }

}
