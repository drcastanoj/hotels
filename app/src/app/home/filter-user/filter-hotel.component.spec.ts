import { } from 'jasmine';
import { FilterHotelComponent } from './filter-hotel.component';

describe('FilterHotelComponent   ', () => {
    let controller: FilterHotelComponent;
    beforeEach(() => {
        controller = new FilterHotelComponent();
        spyOn(controller.onFilter, 'emit').and.returnValue({});

    });
    it('should work', () => {
        expect(controller instanceof FilterHotelComponent).toBe(true, 'should create Filter hotel');
    });

    describe('Controller filterHotels  ', () => {
        it('should send start 1, 2 3  ', () => {
            controller.filterStars['1'] = true;
            controller.filterStars['2'] = true;
            controller.filterStars['3'] = true;
            controller.filterHotels();
            expect(controller.onFilter.emit).toHaveBeenCalledTimes(1);
            expect(controller.onFilter.emit).toHaveBeenCalledWith({
                name: undefined,
                stars: [1, 2, 3]
            });

        });

        it('should send name whithout stars ', () => {
            controller.filterStars['1'] = false;
            controller.filterStars['2'] = false;
            controller.filterStars['3'] = false;
            controller.nameHotel = 'name';
            controller.filterHotels();
            expect(controller.onFilter.emit).toHaveBeenCalledTimes(1);
            expect(controller.onFilter.emit).toHaveBeenCalledWith({
                name: 'name',
                stars: undefined
            });

        });
    });

});
