import express from "express"
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();
router

    /*     .get("/checkauth", verifyToken, (req, res, next) => {
            res.send("Logged in")
        })
        .get("/checkuser/:id", verifyUser, (req, res, next) => {
            res.send("You are Logged in and can delete your account")
        })
        .get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
            res.send("You are Logged in and can delete all account")
        }) */

    //UPDATE
    .put("/:id", verifyUser, updateUser)
    //DELETE
    .delete("/:id", verifyUser, deleteUser)
    //GET ONE
    .get("/:id", verifyUser, getUser)
    //GET ALL
    .get("/", verifyAdmin, getUsers)

export default router;