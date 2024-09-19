import React from 'react';

interface MusicCardProps {
  name: string;
  artist: string;
  releaseDate: string;
}

export default function MusicCard({ name, artist, releaseDate }: MusicCardProps) {
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
      </div>
    </div>
  );
}
