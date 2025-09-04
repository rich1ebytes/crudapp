import express from "express";
import {eventsList, eventsPost, eventEdit, eventDeletion} from "../controllers/event.controller.js";
const router = express.Router();


router.get("/",eventsList);
router.delete("/:eventName",eventDeletion);
router.post("/",eventsPost);
router.put("/:eventName",eventEdit)

export default router