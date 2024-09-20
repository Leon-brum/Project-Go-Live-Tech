import React, { useState } from 'react';

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: { name: string; artist: string; releaseDate: string, albumId: null }) => void;
}

export default function Modal({ title, isOpen, onClose, onSubmit }: ModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    artist: '',
    releaseDate: '',
    albumId: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      albumId: null // Inclua o albumId, que é null neste caso
    });
    onClose(); // Fechar o modal após a submissão
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-800 p-6 rounded shadow-lg text-white w-96">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Nome
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="artist" className="block text-sm font-semibold mb-2">
              Artista
            </label>
            <input
              id="artist"
              name="artist"
              type="text"
              value={formData.artist}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="releaseDate" className="block text-sm font-semibold mb-2">
              Data de Lançamento
            </label>
            <input
              id="releaseDate"
              name="releaseDate"
              type="date"
              value={formData.releaseDate}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded"
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mr-2"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
            >
              Criar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
