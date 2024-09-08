import { Request, Response, NextFunction } from "express";

const asyncErrorHandler = (
	callbackFunc: (
		req: Request,
		res: Response,
		next: NextFunction
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	) => Promise<void | Response<any, Record<string, any>>>
) => {
	return (req: Request, res: Response, next: NextFunction) => {
		callbackFunc(req, res, next).catch((err: Error) => next(err));
	};
};

export default asyncErrorHandler;
