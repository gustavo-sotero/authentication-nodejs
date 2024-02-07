import Router from '@koa/router';
import { UserController } from '../../controllers/v1/users';

const router = new Router({ prefix: '/users' });
const userController = new UserController();
router.get('/:id', userController.getUser);

router.post('/register', userController.register);

router.post('/login', userController.login);

export { router };
