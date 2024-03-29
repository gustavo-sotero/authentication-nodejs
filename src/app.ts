import cors from '@koa/cors';
import Koa from 'koa';
import { koaBody } from 'koa-body';
import { router } from './router';

const app = new Koa();

app.use(cors());
app.use(koaBody());
app.use(router.routes()).use(router.allowedMethods());

export { app };
