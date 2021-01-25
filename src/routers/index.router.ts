import express from 'express';
import { authRouters } from './auth.router';

export const routers = express();
routers.use('/auth',authRouters);