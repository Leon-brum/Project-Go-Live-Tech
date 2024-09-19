import React from 'react';

interface ButtonGroupProps {
  onFetchMusics: () => void;
  onFetchAlbums: () => void;
}

export default function ButtonGroup({ onFetchMusics, onFetchAlbums }: ButtonGroupProps) {
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
    </div>
  );
}
