import Router from '@koa/router';
import { router as usersRouter } from './routes/v1/users';

const router = new Router();

router.use('/v1', usersRouter.routes());

export { router };
