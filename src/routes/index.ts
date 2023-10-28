import express, { Router } from "express";
import fashionRouter from "./fashion.route";
import styleRouter from "./style.route";
import advanceFashionRouter from "./advance-fashion.route";

const router: Router = express.Router();
router.use(fashionRouter);
router.use(styleRouter);
router.use(advanceFashionRouter);

export default router;
