import React from 'react';

interface ButtonGroupProps {
  onFetchMusics: () => void;
  onFetchAlbums: () => void;
  onCreateMusic: () => void;
  onCreateAlbum: () => void;
}

export default function ButtonGroup({ onFetchMusics, onFetchAlbums, onCreateMusic, onCreateAlbum }: ButtonGroupProps) {
  return (
    <div className="mb-4">
      <button
        onClick={onFetchMusics}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mx-2"
      >
        Ver Músicas
      </button>
      <button
        onClick={onFetchAlbums}
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mx-2"
      >
        Ver Álbuns
      </button>
      <button
        onClick={onCreateMusic}
        className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded mx-2"
      >
        Criar Música
      </button>
      <button
        onClick={onCreateAlbum}
        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mx-2"
      >
        Criar Álbum
      </button>
    </div>
  );
}
