import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import { Context, Next } from 'koa';
export const isAuth = async (ctx: Context, next: Next) => {
  try {
    if (!ctx.headers.authorization) {
      ctx.status = StatusCodes.UNAUTHORIZED;
      ctx.body = ReasonPhrases.UNAUTHORIZED;
      return;
    }
    const token = ctx.headers.authorization.replace('Bearer ', '');
    const tokenVerified = jwt.verify(token, 'secret_key');
    if (tokenVerified) {
      ctx.status = StatusCodes.OK;
      ctx.body = ReasonPhrases.OK;
      return;
    }
    next();
  } catch (error) {
    const errorMessage =
      (error as Error).message || 'Ocorreu um erro desconhecido.';

    if (errorMessage.includes('Usuário não existe')) {
      ctx.status = StatusCodes.NOT_FOUND;
    } else {
      ctx.status = StatusCodes.INTERNAL_SERVER_ERROR;
    }

    ctx.body = { error: errorMessage };
  }
};
