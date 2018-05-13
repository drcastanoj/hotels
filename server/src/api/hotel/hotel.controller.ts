
import { Request, Response, NextFunction } from 'express';
import { hotels } from './data';
export class HotelController {

    getHotel(req: Request, res: Response, next: NextFunction) {
        return res.json(hotels);
    }

    getHotels(req: Request, res: Response, next: NextFunction) {
        if (req.query && req.query.filter) {
            const query = req.query.filter;
            const response = hotels.filter((hotel) => {
                if (query.stars) {
                    for (let stars of JSON.parse(query.stars)) {
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

export let controller = {
    get: (req: Request, res: Response, next: NextFunction) => {
        res.json({ ok: true });
    },
    getById: (req: Request, res: Response, next: NextFunction) => {
        res.json({ ok: true });
    },
    post: (req: Request, res: Response, next: NextFunction) => {
        res.json({ ok: true });
    },
    put: (req: Request, res: Response, next: NextFunction) => {
        res.json({ ok: true });
    },
    delete: (req: Request, res: Response, next: NextFunction) => {
        res.json({ ok: true });
    },
};