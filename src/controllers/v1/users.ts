import { StatusCodes } from 'http-status-codes';
import { Context } from 'koa';
import { UserService } from '../../services/users';
export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public getUser = async (ctx: Context) => {
    try {
      const { id } = ctx.params;

      const message = await this.userService.getUser({
        id: Number(id)
      });
      ctx.status = StatusCodes.OK;
      ctx.body = message;
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

  public register = async (ctx: Context) => {
    try {
      const { username, password, email, name } = ctx.request.body;

      const message = await this.userService.register({
        username,
        password,
        email,
        name
      });
      ctx.status = StatusCodes.CREATED; // 201 Created para sucesso na criação
      ctx.body = { message };
    } catch (error) {
      const errorMessage =
        (error as Error).message || 'Ocorreu um erro desconhecido.';

      if (errorMessage.includes('já existe')) {
        ctx.status = StatusCodes.CONFLICT;
      } else if (errorMessage.includes('Não foi possível criar')) {
        ctx.status = StatusCodes.SERVICE_UNAVAILABLE;
      } else {
        ctx.status = StatusCodes.INTERNAL_SERVER_ERROR;
      }

      ctx.body = { error: errorMessage };
    }
  };

  public login = async (ctx: Context) => {
    try {
      const { username, password } = ctx.request.body;
      const message = await this.userService.login({
        username,
        password
      });
      ctx.status = StatusCodes.OK;
      ctx.body = message;
    } catch (error) {
      const errorMessage: string =
        (error as Error).message || 'Ocorreu um erro desconhecido.';

      if (errorMessage.includes('Usuário inexistente')) {
        ctx.status = StatusCodes.NOT_FOUND;
      } else if (errorMessage.includes('Senha invalida')) {
        ctx.status = StatusCodes.UNAUTHORIZED;
      } else {
        ctx.status = StatusCodes.INTERNAL_SERVER_ERROR;
      }

      ctx.body = { error: errorMessage };
    }
  };
}
