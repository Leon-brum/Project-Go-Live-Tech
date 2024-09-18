import User from '../database/models/User';
import IUser from '../interfaces/User/IUser'
import { IUserModel } from '../interfaces/User/IUserModel';

export default class UserModel implements IUserModel {
  private model = User;

  async findByEmail(user: string): Promise<IUser | null> {
    const userName = await this.model.findOne({ where: { user } });
    return userName;
  }

  async findById(id: string): Promise<IUser | null> {
    const userId = await this.model.findOne({ where: { id } });
    return userId;
  }

  async createUser(user: string, password: string): Promise<IUser> {
    const newUser = await this.model.create({
      user, password
    });
    return newUser;
  }

  async deleteUser(id: number): Promise<boolean> {
    const rowsDeleted = await this.model.destroy({ where: { id } });
    return rowsDeleted > 0;
  }
}