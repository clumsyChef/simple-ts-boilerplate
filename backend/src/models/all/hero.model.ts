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

const updateHero = async (heroId: string, data: ISuperhero) =>
	await PrismaInstance.superheros.update({
		where: { id: Number(heroId) },
		data,
	});

const deleteHero = async (heroId: string) =>
	await PrismaInstance.superheros.delete({ where: { id: Number(heroId) } });

const HeroModel = {
	createHero,
	getAllHeros,
	getSingleHero,
	updateHero,
	deleteHero,
};

export default HeroModel;
