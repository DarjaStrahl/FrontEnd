import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ItemComponent } from "./item/item.component";

@Injectable()
export class ItemService {
  private apiUrl = 'http://localhost:8080/api/items';
  constructor (private http: Http) {}
  getItems(): Observable<ItemComponent[]> {
    return this.http.get(this.apiUrl)
      .map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
}
