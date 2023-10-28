import express, { Router } from "express";
import cors from "cors";
import {
  create,
  detail,
  list,
  remove,
  update,
} from "../controllers/advance-fashion.controller";

const router: Router = express.Router();

router.get("/advance-fashions", cors(), list);
router.get("/advance-fashions/:id", cors(), detail);
router.post("/advance-fashions", cors(), create);
router.put("/advance-fashions/:id", cors(), update);
router.delete("/advance-fashions/:id", cors(), remove);

export default router;
