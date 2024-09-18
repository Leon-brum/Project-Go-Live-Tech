import UserModel from '../model/UserModel';
import IUser from '../interfaces/User/IUser';
import { IUserModel } from '../interfaces/User/IUserModel';
import { ServiceMessage, ServiceResponse } from '../utils/ServiceResponse'; 

export default class UserService {
  constructor(private userModel: IUserModel = new UserModel()) { }

  public async getByEmail(user: string): Promise<ServiceResponse<IUser>> {
    const userName = await this.userModel.findByEmail(user);
    if (!userName) return { 
      status: 'UNAUTHORIZED',
      data: { message: 'email ou password invalidos!' } 
    }
    return { status: 'SUCCESSFUL', data: userName };
  }

  public async getById(id: string): Promise<unknown>{
    const userFind = await this.userModel.findById(id);
    if (!userFind) return {
      status: 401,
      message: { message: `O id ${id} não foi encontrado!`} }
    return { status: 200, message: { user: userFind }};
  }

  public async createUser(
    user: string,
    password: string
  ): Promise<ServiceResponse<IUser | ServiceMessage>> {
    const newUser = await this.userModel.createUser(
    user,
    password,
    );
    return { status: 'CREATE', data: newUser };
  }

  public async deleteUser(id: number): Promise<ServiceResponse<ServiceMessage>>{
    const exist = await this.userModel.deleteUser(id);
    if(!exist) return {status: 'NOT_FOUND', data: { message: 'Usuario nao encontrado!' }}
    return {status: 'SUCCESSFUL', data: { message: 'Usuario deletado!' }}
  }
}