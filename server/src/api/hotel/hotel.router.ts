import { Router } from "express";
import { HotelController } from "./hotel.controller";

const controller = new HotelController();
const router = Router();

router.route("/")
    .get(controller.getHotels);

export let hotelRouter = router;