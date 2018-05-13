import { Component, Output, EventEmitter } from '@angular/core';
import { FilterStars, IFilterHotel } from './filter-starts.model';


@Component({
  selector: 'app-filter-user',
  templateUrl: './filter-user.component.html',
  styleUrls: ['./filter-user.component.scss']
})
export class FilterUserComponent {

  public filterStars: FilterStars = new FilterStars();
  public nameHotel: string;
  public toggle: { hotelName: boolean; starts: boolean } = { hotelName: false, starts: false };
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
