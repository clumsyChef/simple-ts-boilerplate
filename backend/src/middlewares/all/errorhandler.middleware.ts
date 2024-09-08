import { NextFunction, Request, Response } from "express";
import fs from "fs";
import path from "path";
import { randomUUID } from "crypto";

const ErrorHandler = (
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	err: any,
	req: Request,
	res: Response,
	_next: NextFunction
) => {
	const correlationId = req.headers["x-correlation-id"] || randomUUID(); // Extract correlation ID

	// Log the error with correlation ID
	const errorLog = {
		correlationId,
		message: err.message,
		stack: err.stack,
		status: err.status || 500,
		timestamp: new Date().toISOString(),
	};

	fs.appendFileSync(
		path.join(__dirname, "../../logs/error.log"),
		`\n\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n\n` +
			JSON.stringify(errorLog, null, "\t")
	);

	// Respond with the error
	res.status(err.status || 500).json({
		success: false,
		correlationId,
	});
};

export default ErrorHandler;
