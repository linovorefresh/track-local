import { Router } from "express";

const router = Router();

router.get("/api", (req, res) => {
    res.json({
        data: 'greetings from api',
    })
})

export default router;