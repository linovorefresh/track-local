import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.json({
        data: 'greetings from api from routes',
    })
})

export default router;