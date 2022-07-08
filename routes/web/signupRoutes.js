import express from "express";
import signupController from "../../controllers/web/signupController.js"

const router = express.Router();

router
    .get("/signup", signupController.index)
    .post("/signup", signupController.signup)

export default router;