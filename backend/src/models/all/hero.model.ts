import { ISuperhero } from "@AppTypes";
import { PrismaInstance } from "@Utils";

const createHero = async (data: ISuperhero) =>
	await PrismaInstance.superheros.create({
		data,
	});

const getAllHeros = async () => await PrismaInstance.superheros.findMany();

const getSingleHero = async (heroId: string) =>
	await PrismaInstance.superheros.findUnique({
		where: { id: Number(heroId) },
	});

const getError = async () => {
	throw { status: 404, message: "Something wrong happened" };
};

const HeroModel = { getAllHeros, getSingleHero, getError, createHero };

export default HeroModel;
