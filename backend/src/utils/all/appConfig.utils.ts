import dotenv from "dotenv";

dotenv.config();

const AppConfig = {
	port: process.env.PORT || "",
	nodeEnv: process.env.NODE_ENV || "",
};

export default AppConfig;
