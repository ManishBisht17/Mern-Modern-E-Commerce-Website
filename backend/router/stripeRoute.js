import express from "express";
import getCheckoutSession from "../controller/stripePayment.js";
const router = express.Router();
router.post("/create-checkout-session", getCheckoutSession);
