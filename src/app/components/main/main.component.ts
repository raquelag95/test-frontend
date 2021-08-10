import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  arrButtons: any[]; // arr de botones del menú para dinamizar el html

  constructor(private router: Router) { }

  ngOnInit() {
    // Se inicializa el arr de botones
    this.arrButtons = [];
    this.arrButtons
      .push(
        { color: 'blue', title: 'People', id: 'people' },
        { color: 'green', title: 'Starship', id: 'starship' },
        { color: 'orange', title: 'Planets', id: 'planets' }
      );
  }

  /**
   * Método que cambia de ruta según el botón seleccionado
   * @param event 
   */
  navitage(event) {
    switch (event) {
      case 'people':
        this.router.navigate(['cards/people']);
        break;
      case 'starship':
        this.router.navigate(['cards/starships']);
        break;
      case 'planets':
        this.router.navigate(['cards/planets']);
        break;
    }

  }

}
