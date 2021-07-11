import mailer, { sendTestMail } from '../util/mailer';
import { NextFunction, Request, Response } from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
    let response = await sendTestMail(await mailer, req.body.to);
    if (response.error) return res.json({ error: response.error });
    res.json(response);
}