import express, { Express, Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
	res.send("Express + TypeScript Server USER");
});

router.get("/new", (req: Request, res: Response) => {
	res.send("New User");
});

export default router;	