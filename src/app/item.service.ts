import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ItemComponent } from "./item/item.component";

@Injectable( )
export class ItemService {
  private itemsUrl = 'http://localhost:8080/api/items';
  constructor( private http: Http ) { }
  getItems(): Observable<ItemComponent[]> {
    return this.http.get( this.itemsUrl )
      .map( ItemService.extractData )
      .catch( ItemService.handleError );
  }

  private static extractData( res: Response ) {
    let body = res.json( );
    return body || { };
  }

  private static handleError (error: Response | any) {
    let errMsg: string;
    if ( error instanceof Response ) {
      const body = error.json( ) || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${ error.status } - ${error.statusText || '' } ${ err }`;
    } else {
      errMsg = error.message ? error.message : error.toString( );
    }
    console.error( errMsg );
    return Observable.throw( errMsg );
  }
}
