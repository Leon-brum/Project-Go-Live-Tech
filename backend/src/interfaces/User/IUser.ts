import { Identifiable } from "..";

export default interface User extends Identifiable {
  id: number,
  user: string,
  password: string,
}