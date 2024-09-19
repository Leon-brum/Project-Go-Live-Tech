import React from 'react';

interface AlbumCardProps {
  id: number;
  name: string;
  artist: string;
  releaseDate: string;
  onClick: () => void;
  onDelete: () => void;
}

export default function AlbumCard({ name, artist, releaseDate, onClick }: AlbumCardProps) {
  return (
    <div
      className="card bg-gray-800 text-gray-200 shadow-md rounded-lg cursor-pointer hover:bg-gray-700 transition"
      onClick={onClick}
    >
      <div className="relative h-40 mb-2 overflow-hidden">
        <img
          src="https://cdn-icons-png.freepik.com/512/11956/11956464.png"
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold">{name}</h2>
        <p>Artista: {artist}</p>
        <p>Data de Lançamento: {releaseDate}</p>
      </div>
    </div>
  );
}
