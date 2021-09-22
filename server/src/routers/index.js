import { Router } from 'express';

import {welcomeController} from '../controllers';

export const welcomeRouter = Router();

/**
 * hello world
 */
welcomeRouter.get('/', welcomeController.welcome);
