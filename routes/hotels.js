import express from "express"
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router
    //CREATE
    .post("/", verifyAdmin, createHotel)
    //UPDATE
    .put("/:id", verifyAdmin, updateHotel)
    //DELETE
    .delete("/:id", verifyAdmin, deleteHotel)
    //GET ONE
    .get("/:id", getHotel)
    //GET ALL
    .get("/", getHotels)

export default router;