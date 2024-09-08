import { Request, Response, NextFunction } from "express";

const allowedOrigins = [
	"http://localhost:5173",
	// "https://simpleupsell.com",
	// "https://simpleupsellfe.com",
	// "https://simpleupsellbe.com",
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const corsOptions: any = {
	origin: function (
		origin: string,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		callback: (arg0: Error | null, arg1: boolean) => any
	) {
		// allow requests with no origin
		// (like mobile apps or curl requests)
		if (!origin) return callback(null, true);
		if (allowedOrigins.indexOf(origin) === -1) {
			const msg = `The CORS policy for this site does not allow access from the specified Origin: ${origin}`;
			return callback(new Error(msg), false);
		}
		return callback(null, true);
	},
	credentials: true,
	// preflightContinue: true,
};

const allowCors = (_req: Request, res: Response, next: NextFunction) => {
	// Implement your custom CORS logic here
	// For example, allow requests from a specific origin
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET");
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

	// Continue to the next middleware/route handler
	next();
};

const AllCors = { corsOptions, allowCors };

export default AllCors;
