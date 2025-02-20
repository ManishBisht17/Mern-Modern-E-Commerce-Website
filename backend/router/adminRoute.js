import express from "express";
import { getAdminDashboard, verifyAdmin } from "../controller/admin.js";
const router = express.Router();

router.get("/dashboard", verifyAdmin, getAdminDashboard);

export default router;
