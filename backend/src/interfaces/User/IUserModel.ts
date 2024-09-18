import IUser from './IUser';
import { ID } from '..';

export interface IUserModel {
  findByEmail(user: IUser['user']): Promise<IUser | null>
  findById(id: string): Promise<IUser | null>
  createUser(
    user: IUser['user'],
    password: IUser['password']
  ): Promise<IUser>;
  deleteUser(id: ID): Promise<boolean>
}