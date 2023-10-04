import { Router } from "express";
import { preRegister } from "../controllers/auth.js";

const router = Router();

router.post("/preRegister", preRegister)

export default router;