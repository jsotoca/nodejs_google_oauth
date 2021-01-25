import { Request, Response } from 'express';

export const home = (req:Request, res:Response) => {
    res.json({
        message: 'not login jet'
    });
};

export const success = (req:Request, res:Response) => {
    const user = req.user;
    return res.json({
        user,
        message: 'good login!'
    });
};

export const failed = (req:Request, res:Response) => {
    return res.json({
        message: 'bad login!'
    });
};

export const logout = (req:Request, res:Response) => {
    req.session = null;
    req.logOut();
    res.redirect('/auth');
};