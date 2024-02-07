import request from 'supertest';
import { app } from '../app'; // Importe seu aplicativo Koa

describe('Autenticação', () => {
  it('Get user failed', async () => {
    const response = await request(app.callback()).get('/v1/users/1');
    expect(response.status).toBe(404);
    expect(response.body.error).toEqual('Usuário não existe.');
  });

  // it('impede registro com nome de usuário que já existe', async () => {
  //   // Supondo que 'testuser' já esteja registrado
  //   const response = await request(app.callback())
  //     .post('/v1/users/register')
  //     .send({
  //       username: 'testuser',
  //       password: 'password123'
  //     });
  //   expect(response.status).toBe(409); // Conflict
  // });
});
