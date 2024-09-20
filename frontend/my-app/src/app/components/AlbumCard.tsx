import React from 'react';

interface AlbumCardProps {
  id: number;
  name: string;
  artist: string;
  releaseDate: string;
  onClick: () => void;
  onDelete: () => void;
  onEdit: () => void; // Nova prop para abrir o modal de edição
}

export default function AlbumCard({ name, artist, releaseDate, onClick, onDelete, onEdit }: AlbumCardProps) {
  return (
    <div
      className="card bg-gray-800 text-gray-200 shadow-md rounded-lg cursor-pointer hover:bg-gray-700 transition"
      onClick={onClick}
    >
      <div className="relative h-40 mb-2 overflow-hidden">
        <img
          src="https://cdn-icons-png.freepik.com/512/11956/11956464.png"
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold">{name}</h2>
        <p>Artista: {artist}</p>
        <p>Data de Lançamento: {releaseDate}</p>
      </div>
      <button
        onClick={onDelete}
        className="mt-2 bg-red-600 text-white py-1 px-4 rounded hover:bg-red-700"
      >
        Deletar
      </button>
      <button
        onClick={onEdit} // Abre o modal de edição
        className="ml-2 mt-2 bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700"
      >
        Editar
      </button>
    </div>
  );
}

