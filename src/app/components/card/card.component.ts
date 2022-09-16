import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() title = 'Title not found';
  @Input() icon = 'download.svg'

  clicked: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.clicked = ! this.clicked;
  }

}
