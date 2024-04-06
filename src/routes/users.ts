import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
	res.send("user list");
});

router.post("/", (req: Request, res: Response) => {
	res.send("New User");
});

router
	.route("/:id")
	.get((req: Request, res: Response) => {
		res.send(`user with id ${req.params.id}`);
	})
	.put((req: Request, res: Response) => {
		res.send(`update user with id ${req.params.id}`);
	})
	.delete((req: Request, res: Response) => {
		res.send(`delete user with id ${req.params.id}`);
	});

export default router;
