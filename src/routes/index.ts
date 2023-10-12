import express, { Router } from 'express'
import fashionRouter from './fashion.route'

const router: Router = express.Router()
router.use(fashionRouter)

export default router