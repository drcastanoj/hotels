import { Router } from 'express';
import { hotelRouter } from './hotel/hotel.router';

let router = Router();
router.use('/hotel', hotelRouter);

export let apiRouter = router;

