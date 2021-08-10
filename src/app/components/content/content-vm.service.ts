import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContentVmService {

  constructor(private http: HttpClient) { }


  /**
   * Hace la llamada a la API para traer los datos
   * @param url
   */
  loadDataCard(url: string) {
    return this.http.get<any>(url);
  }

}
