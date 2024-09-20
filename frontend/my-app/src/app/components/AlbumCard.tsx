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
    <div className="card bg-gray-800 text-gray-200 shadow-md rounded-lg overflow-hidden">
      <div className="h-40 mb-2">
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

      {/* Contêiner para os botões */}
      <div className="p-4 flex space-x-2">
        <button
          onClick={onClick}
          className="bg-green-600 text-white py-1 px-4 rounded hover:bg-green-700"
        >
          Ver
        </button>
        <button
          onClick={onDelete}
          className="bg-red-600 text-white py-1 px-4 rounded hover:bg-red-700"
        >
          Deletar
        </button>
        <button
          onClick={onEdit}
          className="bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700"
        >
          Editar
        </button>
      </div>
    </div>
  );
}
