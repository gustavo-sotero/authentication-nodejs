import request from 'supertest';
import { app } from '../app'; // Importe seu aplicativo Koa

describe('Autenticação', () => {
  it('Pegar informações do usuário com falha.', async () => {
    const response = await request(app.callback()).get('/v1/users/1');
    expect(response.status).toBe(404);
  });

  it('Pegar informações do usuário com sucesso.', async () => {
    const response = await request(app.callback()).get('/v1/users/4');
    expect(response.status).toBe(200);
  });

  it('Registra usuário com sucesso.', async () => {    
    const response = await request(app.callback())
      .post('/v1/users/register')
      .send({
        username: 'usera',
        password: 'password',
        name: 'user a',
        email: 'user.a@user.com'
      });
    expect(response.status).toBe(201);
    expect(response.body.message).toEqual('Usuário criado com sucesso.'); 
  });

  it('impede registro com nome de usuário que já existe', async () => {
    const response = await request(app.callback())
      .post('/v1/users/register')
      .send({
        username: 'usera',
        password: 'password',
        name: 'user a',
        email: 'user.a@user.com'
      });
    expect(response.status).toBe(409);
  });

  it('Login de usuário com sucesso.', async () => {
    const response = await request(app.callback())
      .post('/v1/users/login')
      .send({
        username: 'usera',
        password: 'password'
      });
    expect(response.status).toBe(200);
  });

  it('Login de usuário com falha de usuário inexistente.', async () => {
    const response = await request(app.callback())
      .post('/v1/users/login')
      .send({
        username: 'userb',
        password: 'password'
      });
    expect(response.status).toBe(404);
  });

  it('Login de usuário com falha de senha incorreta.', async () => {
    const response = await request(app.callback())
      .post('/v1/users/login')
      .send({
        username: 'usera',
        password: 'password1'
      });
    expect(response.status).toBe(401);
  });
});
