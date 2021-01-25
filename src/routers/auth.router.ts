import { Router } from 'express';
import { google, callback, isLoggin} from '../middlewares/passport.middleware';
import { success, failed, home, logout} from '../controllers/auth.controller';

export const authRouters = Router();

authRouters.get('/',home);
authRouters.get('/google',google);
authRouters.get('/google/callback',callback);
authRouters.get('/google/success',isLoggin,success);
authRouters.get('/google/failed',failed);
authRouters.get('/logout',logout);