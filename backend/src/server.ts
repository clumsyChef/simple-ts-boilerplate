import express, { Application } from "express";
import { AppConfig, Texts } from "@Utils";
import cookieParser from "cookie-parser";
import { HeroRouter } from "@Routers";
import { AllCors, ErrorHandler } from "@Middlewares";
import cors from "cors";

const app: Application = express();

app.disable("x-powered-by");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
	cors(AllCors.corsOptions)(req, res, next);
});

// app.get("/api/v1/", (_req, res) => {
// 	return res.status(200).json({ fName: "Sarthak", lName: "Jha" });
// });

app.use("/api/v1", HeroRouter);

app.all("*", (_req, res) => {
	return res.status(404).json({ status: false, error: Texts.NOT_FOUND });
});

app.use(ErrorHandler);

const port = AppConfig.port;

app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`Server is running on port: ${port}`);
});
