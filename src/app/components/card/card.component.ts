import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CardBean } from '../../bean/card.bean';

@Component({
  selector: 'ui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {

  @Input() 
  data: CardBean; // objeto cuyas propiedades van a pintarse

  constructor() { }

  ngOnInit() {
  }

}
