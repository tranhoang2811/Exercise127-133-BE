import express, { Router } from "express";
import cors from "cors";
import {
  create,
  detail,
  list,
  remove,
  update,
} from "../controllers/fashion.controller";

const router: Router = express.Router();

router.get("/fashions", cors(), list);
router.get("/fashions/:id", cors(), detail);
router.post("/fashions", cors(), create);
router.put("/fashions/:id", cors(), update);
router.delete("/fashions/:id", cors(), remove);

export default router;
