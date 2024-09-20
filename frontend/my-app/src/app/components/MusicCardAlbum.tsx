import React from 'react';

interface MusicCardAlbumProps {
  id: number;
  name: string;
  artist: string;
  releaseDate: string;
  onRemoveFromAlbum: () => void;
  onEdit: () => void;
}

export const MusicCardAlbum: React.FC<MusicCardAlbumProps> = ({ name, artist, releaseDate, onRemoveFromAlbum, onEdit }) => {
  return (
    <div className="card bg-gray-800 text-gray-200 shadow-md rounded-lg overflow-hidden">
      <div className="h-40 mb-2">
        <img
          src="https://t2.tudocdn.net/510958?w=1920"
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold">{name}</h2>
        <p>Artista: {artist}</p>
        <p>Data de Lançamento: {releaseDate}</p>
        <div className="mt-2">
          <button
            onClick={onRemoveFromAlbum}
            className="bg-red-600 text-white py-1 px-4 rounded hover:bg-red-700"
          >
            Remover do Álbum
          </button>
          <button
            onClick={onEdit}
            className="ml-2 bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700"
          >
            Editar
          </button>
        </div>
      </div>
    </div>
  );
};
