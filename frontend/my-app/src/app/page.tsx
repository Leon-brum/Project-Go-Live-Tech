"use client";

import { useState } from 'react';
import ButtonGroup from './components/ButtonGroup';
import MusicCard from './components/MusicCard';
import AlbumCard from './components/AlbumCard';
import { fetchMusics, fetchAlbums, fetchAlbumMusics } from './api/api';
import IMusic from './interfaces/IMusic';
import IAlbum from './interfaces/IAlbum';

export default function Home() {
  const [musics, setMusics] = useState<IMusic[]>([]);
  const [albums, setAlbums] = useState<IAlbum[]>([]);
  const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-200">
      <h1 className="text-4xl font-bold text-green-400 mb-6">
        Gerenciador de Músicas e Álbuns
      </h1>

      <ButtonGroup 
        onFetchMusics={() => {
          setAlbums([]);
          fetchMusics(setMusics, setSelectedAlbum, setLoading);
        }} 
        onFetchAlbums={() => {
          setMusics([]);
          fetchAlbums(setAlbums, setMusics, setSelectedAlbum, setLoading);
        }} 
      />

      {loading && <div className="text-green-400">Carregando...</div>}

      {musics.length > 0 && !selectedAlbum && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-full px-6">
          {musics.map((music) => (
            <MusicCard key={music.id} name={music.name} artist={music.artist} releaseDate={music.releaseDate} />
          ))}
        </div>
      )}

      {albums.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full px-6">
          {albums.map((album) => (
            <AlbumCard
              key={album.id}
              name={album.name}
              artist={album.artist}
              releaseDate={album.releaseDate}
              onClick={() => fetchAlbumMusics(album.id, setMusics, setSelectedAlbum, setLoading)}
            />
          ))}
        </div>
      )}

      {selectedAlbum && musics.length > 0 && (
        <div className="w-full px-6">
          <h2 className="text-3xl font-bold text-green-400 mb-4">Músicas do Álbum</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {musics.map((music) => (
              <MusicCard key={music.id} name={music.name} artist={music.artist} releaseDate={music.releaseDate} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
