import { compareSync, hashSync } from 'bcryptjs';
import { Request, Response } from 'express';
import UserService from '../services/user.service';
import mapStatusHTTP from '../utils/MapStatusHTTP';
import jwt from '../jwt/jwt';
import IUser from '../interfaces/User/IUser';

interface token extends Request {
  token?: { id: string };
}

export default class UserController {
  constructor(
    private userService = new UserService(),
  ) { }

  public async login(req: Request, res: Response) {
    const { user, password } = req.body;
    const { status, data } = await this.userService.getByEmail(user);
    const { id, user: userName, password: userPassword } = data as IUser

    if (status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(status)).json(data)
    }
    if (!compareSync(password, userPassword)) {
      return res.status(mapStatusHTTP(status)).json({ message: 'email ou password invalidos!!' });
    }

    const token = jwt.sign({ id, userName, userPassword });

    return res.status(mapStatusHTTP(status)).json({ token });
  }

  public async findById(req: token, res: Response): Promise<Response> {
    const { token } = req;
    if (!token) return res.status(401).json({ message: 'missing token' });

    const user = await this.userService.getById(token.id) as {
      status: number, message: string
    };
    return res.status(user.status).json(user.message);
  }

  public async createUser(req: Request, res: Response): Promise<Response> {
    try {
      const { user, password } = req.body;
      const hash = hashSync(password, 10);
      const newUser = await this.userService.createUser(
        user,
        hash,
      )
      return res.status(mapStatusHTTP(newUser.status)).json({ menssage: 'Usuario cadastrado com sucesso!' }); 
    } catch (error) {
      return res.status(500).json({ menssage: error }); 
    }

  }

  public async deleteUser(req: Request, res: Response): Promise<Response>{
    const { id } = req.params;
    const serviceResponse = await this.userService.deleteUser(Number(id));
    if(serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
}