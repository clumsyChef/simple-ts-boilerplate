import { ISuperhero } from "@AppTypes";
import { HeroModel } from "@Models";
import { Request, Response, NextFunction } from "express";

const createHero = async (req: Request, res: Response, _next: NextFunction) => {
	const data = req.body as ISuperhero;
	const createdHero = await HeroModel.createHero(data);
	return res.status(201).json({ status: true, data: createdHero });
};

const getAllHeros = async (
	_req: Request,
	res: Response,
	_next: NextFunction
) => {
	const allHeros = await HeroModel.getAllHeros();
	return res.status(200).json({ status: true, data: allHeros });
};

const getSingleHero = async (
	req: Request,
	res: Response,
	_next: NextFunction
) => {
	const heroId = req.params.heroId;
	const hero = await HeroModel.getSingleHero(heroId);
	return res.status(200).json({ status: !!hero, data: hero ?? [] });
};

const getError = async (_req: Request, res: Response, _next: NextFunction) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const error = await HeroModel.getError();
	res.status(404).json({ status: false, error: "404 error" });
	// if (error) {

	// }
};

const HeroController = { createHero, getAllHeros, getSingleHero, getError };

export default HeroController;
