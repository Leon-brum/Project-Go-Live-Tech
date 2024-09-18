import { Identifiable } from "..";

export default interface Album extends Identifiable {
  id: number,
  name: string,
  artist: string,
  releaseDate: Date
}