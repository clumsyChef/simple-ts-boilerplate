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

HeroRouter.put(
	"/update-hero/:heroId",
	asyncErrorHandler(HeroController.updateHero)
);

HeroRouter.delete(
	"/delete-hero/:heroId",
	asyncErrorHandler(HeroController.deleteHero)
);

export default HeroRouter;
