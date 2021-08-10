import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CardBean } from '../../bean/card.bean';
import { ContentVmService } from './content-vm.service';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class ContentComponent implements OnInit {

  id: string; // identificador del tipo de tarjeta (path url)
  urlBase: string; // url base para las peticiones a la API
  cardData: CardBean[]; // array de beans para pintar las tarjetas en el html
  displayModalError = false; // muestra un modal para avisar al usuario de que ocurrió un error al cargar los datos

  constructor(private activeRoute: ActivatedRoute,
    public vm: ContentVmService) { }


  ngOnInit() {
    // Al cargar el componente nos suscribimos a la ruta activa para recuperar el id
    this.activeRoute.params.subscribe((param: Params) => {
      this.id = param.id;
      this.urlBase = 'https://swapi.dev/api/'; // asignamos url base
      this.loadData(); // cargamos los datos de la api
    });
  }

  /**
   * Llama al service para recuperar los datos de la tarjeta
   */
  loadData() {

    // se monta la url para la petición
    const finalUrl = this.urlBase + this.id;

    // nos suscribimos
    this.vm.loadDataCard(finalUrl).subscribe(data => {

      // si trae resultados
      if (data && data.results) {

        this.cardData = [];

        // itera en el arr de resultados
        data.results.forEach(item => {

          // mapeamos a un objeto cardbean y añadimos a la lista tipada
          const cardObj = this.mapDataToCardBean(item);
          this.cardData.push(cardObj);

        });       

        // Si no trae resultados, muestra mensaje de error
      } else {
        this.sendMsgError();
      }

    }, error => this.sendMsgError()); // si la petición falla, muestra mensaje de error
  }

  /**
   * Muestra un mensaje de error al usuario
   */
  sendMsgError() {
    this.displayModalError = true;
  }

  /**
   * Mapea la respuesta a un objeto cardbean que entienda el html
   */
  mapDataToCardBean(data: any) {

    // Texto por defecto si no trae alguna propiedad
    const unspecifiedText = 'Sin especificar';

    // Creamos una instancia del bean
    const cardObj = new CardBean();

    // Por defecto añadimos dos botones (no tendrán funcionalidad)
    cardObj.arrButton = [];
    cardObj.arrButton.push(
      {color: 'transparent', title: 'Action 1'},
      {color: 'transparent', title: 'Action 2'}
    );
  
    // Seteamos en función del tipo de objeto que hemos recuperado
    switch (this.id) {
      case 'people': 
      cardObj.title = data.name ? data.name : unspecifiedText;
      cardObj.subtitle = data.gender ? data.gender : unspecifiedText;      
      break;

      case 'planets': 
      cardObj.title = data.name ? data.name : unspecifiedText;
      cardObj.subtitle = data.climate ? data.climate : unspecifiedText;
      break;

      case 'starships': 
      cardObj.title = data.name ? data.name : unspecifiedText;
      cardObj.subtitle = data.manufacturer ? data.manufacturer : unspecifiedText;
      break;
    }

    return cardObj; // retorna el bean
  }



}
