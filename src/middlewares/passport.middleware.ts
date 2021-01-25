import { Request, Response, NextFunction} from 'express';
import passport from 'passport';

export const google = passport.authenticate('google',{
    scope: ['email','profile']
});

export const callback = passport.authenticate('google',{
    successRedirect: '/auth/google/success',
    failureRedirect: '/auth/google/failed'
});

export const isLoggin = (req: Request, res: Response, next: NextFunction) => {
    if(req.user) next();
    else {
        res.status(401);
        res.json({
            message: 'usuario no registrado'
        });
    }
};
