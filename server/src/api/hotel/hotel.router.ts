import { Router } from 'express';
import { HotelController } from './hotel.controller';

let controller = new HotelController();
let router = Router();

router.route('/')
    .get(controller.getHotels);

export let hotelRouter = router;