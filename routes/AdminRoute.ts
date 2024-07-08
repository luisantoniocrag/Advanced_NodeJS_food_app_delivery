import express, { Request, Response, NextFunction } from 'express';
import { CreateVandor, getVandorByID, getVandors } from '../controllers/AdminController';

const router = express.Router();

router.post("/vandor", CreateVandor);
router.get("/vandors", getVandors);
router.get("/vandor/:id", getVandorByID);

router.get('/', (req: Request, res: Response, next: NextFunction)=> {
    res.json({ message: "Hello from admin" });
});

export { router as AdminRoute };