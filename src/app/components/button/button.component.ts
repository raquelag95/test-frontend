import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-button',
  styleUrls: ['./button.component.css'],
  template: 
  `
    <div id="containerButton" title="{{disabledMsg}}" [ngClass]="{'disabled':disabled}" class="{{color}} + btn-class" (click)="click()">
      <ng-content></ng-content>
    </div>
  `
})
export class ButtonComponent implements OnInit {

  @Input() 
  disabled = false;  // boolean que controla si el botón está deshabilitado

  @Input() 
  color: string;  // color del background del botón

  @Input() 
  class: string;  // clase adicional del botón

  @Output()
  onClick: EventEmitter<any>; // emite el evento click

  constructor() {
    this.onClick = new EventEmitter<any>();
  }

  ngOnInit() {
  }

  /**
   * Emite el evento click
   */
  click() {
    this.onClick.emit();
  }

}
