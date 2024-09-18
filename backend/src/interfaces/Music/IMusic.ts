import { Identifiable } from "..";

export default interface Music extends Identifiable {
  id: number,
  name: string,
  artist: string,
  releaseDate: Date,
  albumId: number | null;
}