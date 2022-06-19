import express from "express"
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router
    //CREATE 

    .post("/:hotelid", verifyAdmin, createRoom)
    //UPDATE
    .put("/:id", verifyAdmin, updateRoom)
    //DELETE
    .delete("/:id/:hotelid", verifyAdmin, deleteRoom)
    //GET ONE
    .get("/:id", getRoom)
    //GET ALL
    .get("/", getRooms)


export default router;