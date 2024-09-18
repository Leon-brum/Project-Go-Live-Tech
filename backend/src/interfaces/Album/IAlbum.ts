import { Identifiable } from "..";

export default interface User extends Identifiable {
  id: number,
  name: string,
  artist: string,
  releaseDate: Date,
}