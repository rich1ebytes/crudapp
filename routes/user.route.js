import express from "express";
const router = express.Router();
import {
  getAdmins,
  getByUsername,
  editByUsername,
  deleteByUsername,
  createNewAdmin
} from "../controllers/user.controller.js";

router.get("/api/users", getAdmins);
router.get("/api/users/:username", getByUsername);
router.put("/api/users/:username", editByUsername);
router.delete("/api/users/:username",deleteByUsername );
router.post("/api/users",createNewAdmin);

export default router;
