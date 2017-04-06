
import {Injectable} from "@angular/core";
import { Http } from '@angular/http';

@Injectable()
export class  ItemService {

  constructor(private http: Http ) {}

  getItems() {
    return this.http.get('https://projekt-http.firebaseio.com/data.json');
  }

}

