import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs';
import { IFilterHotel } from '../filter-user/filter-starts.model';
import { HttpClient } from '@angular/common/http';
/* tslint:disable */
@Injectable()
export class HotelService {

  constructor(private http: HttpClient) { };

  public getHotel(filter: IFilterHotel): Observable<any> {
    const url = 'http://localhost:3000/api/hotel?';
    let filterName: string;
    let filterStars: string;
    if (filter) {
      filterName = filter && filter.name ? `&filter[name]=${filter.name}&` : '';
      filterStars = filter && filter.stars ? `&filter[stars]=[${filter.stars}]` : '';
    }
    return this.http.get(url + filterName + filterStars);

  }
}