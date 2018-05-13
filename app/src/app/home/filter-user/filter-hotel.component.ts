import { Component, Output, EventEmitter } from '@angular/core';
import { FilterStars, IFilterHotel } from './filters.model';


@Component({
  selector: 'app-filter-hotel',
  templateUrl: './filter-hotel.component.html',
  styleUrls: ['./filter-hotel.component.scss']
})
export class FilterHotelComponent {

  public filterStars: FilterStars = new FilterStars();
  public nameHotel: string;
  public toggle: { filters: boolean; hotelName: boolean; starts: boolean } = {
    filters: true, hotelName: false, starts: false
  };
  @Output() public onFilter: EventEmitter<IFilterHotel> = new EventEmitter();

  public filterHotels(): void {
    const stars: number[] = [];
    for (const i in this.filterStars) {
      if (this.filterStars[i]) {
        stars.push(Number.parseInt(i));
      }
    }
    const filteHotel: IFilterHotel = {
      name: this.nameHotel,
      stars: stars.length > 0 ? stars : undefined
    };

    this.onFilter.emit(filteHotel);
  }
}
