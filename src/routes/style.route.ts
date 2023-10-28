import express, { Router } from "express";
import cors from "cors";
import { list, create, update } from "../controllers/style.controller";

const router: Router = express.Router();

router.get("/styles", cors(), list);
router.post("/styles", cors(), create);
router.patch("/styles/:id", cors(), update);

export default router;
