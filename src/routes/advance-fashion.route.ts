import express, { Router } from "express";
import cors from "cors";
import {
  adminList,
  clientList,
  create,
  detail,
  remove,
  update,
} from "../controllers/advance-fashion.controller";

const router: Router = express.Router();

router.get("/advance-fashions/admin", cors(), adminList);
router.post("/advance-fashions", cors(), create);
router.put("/advance-fashions/:id", cors(), update);
router.delete("/advance-fashions/:id", cors(), remove);
router.get("/advance-fashions/client", cors(), clientList);
router.get("/advance-fashions/:id", cors(), detail);

export default router;
