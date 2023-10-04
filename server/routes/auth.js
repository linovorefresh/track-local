import { Router } from "express";
import { preRegister, register } from "../controllers/auth.js";

const router = Router();

router.post("/pre-register", preRegister)
router.post('/register', register)

export default router;