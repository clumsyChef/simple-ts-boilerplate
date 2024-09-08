import { HeroController } from "@Controllers";
import { Router } from "express";
import { asyncErrorHandler } from "@Utils";

const HeroRouter = Router();

HeroRouter.post("/create-hero", asyncErrorHandler(HeroController.createHero));

HeroRouter.get("/get-all", asyncErrorHandler(HeroController.getAllHeros));

HeroRouter.get(
	"/get-single/:heroId",
	asyncErrorHandler(HeroController.getSingleHero)
);

HeroRouter.get("/error", asyncErrorHandler(HeroController.getError));

export default HeroRouter;
