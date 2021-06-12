import { Response } from "express";

export const handleError = (err: any, res: Response) => {
    console.log(err);
    return res
        .status(400)
        .json({ message: "Server error, please try again later" });
};
