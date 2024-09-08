import { PrismaClient } from "@prisma/client";
import { AppConfig } from "@Utils";

const prismaClientSingleton = () => {
	return new PrismaClient();
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
	prisma: PrismaClientSingleton | undefined;
};

const PrismaInstance = globalForPrisma.prisma ?? prismaClientSingleton();

export default PrismaInstance;

if (AppConfig.nodeEnv !== "production") globalForPrisma.prisma = PrismaInstance;
