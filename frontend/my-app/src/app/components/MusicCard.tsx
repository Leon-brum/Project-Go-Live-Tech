interface MusicCardProps {
  id: number;
  name: string;
  artist: string;
  releaseDate: string;
  onDelete: () => void;
}

export const MusicCard: React.FC<MusicCardProps> = ({ name, artist, releaseDate, onDelete }) => {
  return (
    <div className="card bg-gray-800 text-gray-200 shadow-md rounded-lg">
    <div className="relative h-40 mb-2 overflow-hidden">
      <img
        src="https://t2.tudocdn.net/510958?w=1920"
        alt={name}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
    <div className="p-4">
      <h2 className="text-xl font-bold">{name}</h2>
      <p>Artista: {artist}</p>
      <p>Data de Lançamento: {releaseDate}</p>
      <button
        onClick={onDelete}
        className="mt-2 bg-red-600 text-white py-1 px-4 rounded hover:bg-red-700"
      >
        Deletar
      </button>
    </div>
  </div>
)};
