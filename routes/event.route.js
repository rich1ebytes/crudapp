import express from "express";
import {EventsPost, EventsList, EventDeletion} from "../controllers/Events.controller.js";
const router = express.Router();


router.get("/",EventsList);
router.delete("/:eventName",EventDeletion);
router.post("/:eventName",EventsPost);


export default router