import React, { useState } from 'react';

interface ModalUpdateProps {
  isOpen: boolean;
  onClose: () => void;
  initialData: { name: string; artist: string; releaseDate: string };
  onUpdate: (updatedData: { name: string; artist: string; releaseDate: string }) => void;
}

const ModalUpdate: React.FC<ModalUpdateProps> = ({ isOpen, onClose, initialData, onUpdate }) => {
  const [name, setName] = useState(initialData.name);
  const [artist, setArtist] = useState(initialData.artist);
  const [releaseDate, setReleaseDate] = useState(initialData.releaseDate);

  const handleSubmit = () => {
    onUpdate({ name, artist, releaseDate });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-800 p-6 rounded shadow-lg text-white w-96">
        <h2 className="text-2xl font-bold mb-4">Editar Informações</h2>

        <label htmlFor="name" className="block text-sm font-semibold mb-2">
          Nome
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 bg-gray-700 text-white rounded mb-4"
        />

        <label htmlFor="artist" className="block text-sm font-semibold mb-2">
          Artista
        </label>
        <input
          id="artist"
          type="text"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          className="w-full px-3 py-2 bg-gray-700 text-white rounded mb-4"
        />

        <label htmlFor="releaseDate" className="block text-sm font-semibold mb-2">
          Data de Lançamento
        </label>
        <input
          id="releaseDate"
          type="date"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
          className="w-full px-3 py-2 bg-gray-700 text-white rounded mb-4"
        />

        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mr-2"
          >
            Salvar
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalUpdate;
