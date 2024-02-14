import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { prismaClient } from '../models/prismaClient';

export class UserService {
  public register = async ({
    email,
    username,
    name,
    password
  }: Pick<User, 'username' | 'password' | 'name' | 'email'>) => {
    const userExists = await prismaClient.user.findUnique({
      where: {
        username
      }
    });
    if (userExists) {
      throw new Error('Usuário já existe.');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prismaClient.user.create({
      data: {
        email,
        name,
        username,
        password: hashedPassword
      }
    });

    if (!user) {
      throw new Error('Não foi possível criar usuário.');
    }
    return 'Usuário criado com sucesso.';
  };

  public getUser = async ({ id }: Pick<User, 'id'>) => {
    const userExists = await prismaClient.user.findUnique({
      select: {
        username: true,
        email: true,
        id: true,
        name: true
      },
      where: {
        id
      }
    });
    if (!userExists) {
      throw new Error('Usuário não existe.');
    }
    return userExists;
  };

  public login = async ({
    username,
    password
  }: Pick<User, 'username' | 'password'>) => {
    const userExists = await prismaClient.user.findUnique({
      where: {
        username
      }
    });
    if (!userExists) {
      throw new Error('Usuário inexistente.');
    }
    const passwordCompare = await bcrypt.compare(password, userExists.password);
    if (!passwordCompare) {
      throw new Error('Senha invalida.');
    }

    const access_token = jwt.sign(
      { id: userExists.id, username },
      'secret_key',
      {
        expiresIn: '1h'
      }
    );

    return { access_token, expires_in: 3600 };
  };
}
