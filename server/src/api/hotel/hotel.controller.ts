
import { Request, Response, NextFunction } from "express";
import { hotels } from "./data";
export class HotelController {

    getHotels(req: Request, res: Response, next: NextFunction) {
        if (req.query && req.query.filter) {
            const query = req.query.filter;
            const response = hotels.filter((hotel) => {
                if (query.stars) {
                    for (const stars of JSON.parse(query.stars)) {
                        if (stars === hotel.stars) {
                            if (query.name) {
                                return hotel.name.toLowerCase().indexOf(query.name.toLowerCase()) >= 0;
                            } else {
                                return true;
                            }
                        }
                    }
                }

                if (!query.stars && query.name) {
                    return hotel.name.toLowerCase().indexOf(query.name.toLowerCase()) >= 0;
                }

            });
            return res.json(response);
        }
        return res.json(hotels);
    }

}
