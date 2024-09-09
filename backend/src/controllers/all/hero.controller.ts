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

const updateHero = async (req: Request, res: Response, _next: NextFunction) => {
	const data = req.body as ISuperhero;
	const heroId = req.params.heroId;
	await HeroModel.updateHero(heroId, data);
	return res.status(200).json({ status: true });
};

const deleteHero = async (req: Request, res: Response, _next: NextFunction) => {
	const heroId = req.params.heroId;
	await HeroModel.deleteHero(heroId);
	return res.status(200).json({ status: true });
};

const HeroController = {
	createHero,
	getAllHeros,
	getSingleHero,
	updateHero,
	deleteHero,
};

export default HeroController;
