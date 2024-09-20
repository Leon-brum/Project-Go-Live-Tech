"use client";

import { useState } from 'react';
import ButtonGroup from './components/ButtonGroup';
import { MusicCard } from './components/MusicCard';
import AlbumCard from './components/AlbumCard';
import Modal from './components/Modal';
import ModalUpdate from './components/ModalUpdate'; // Importa o modal de edição
import { fetchMusics, fetchAlbums, fetchAlbumMusics, createMusic, createAlbum, deleteMusic, deleteAlbum, updateMusic, updateAlbum } from './api/api'; // Adiciona funções de atualização
import IMusic from './interfaces/IMusic';
import IAlbum from './interfaces/IAlbum';

export default function Home() {
  const [musics, setMusics] = useState<IMusic[]>([]);
  const [albums, setAlbums] = useState<IAlbum[]>([]);
  const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  // States to control modals
  const [isMusicModalOpen, setMusicModalOpen] = useState(false);
  const [isAlbumModalOpen, setAlbumModalOpen] = useState(false);

  // States to control editing
  const [isEditMusicModalOpen, setEditMusicModalOpen] = useState(false);
  const [isEditAlbumModalOpen, setEditAlbumModalOpen] = useState(false);
  const [selectedMusic, setSelectedMusic] = useState<IMusic | null>(null);
  const [selectedAlbumForEdit, setSelectedAlbumForEdit] = useState<IAlbum | null>(null);

  // Função para criar uma nova música
  const handleCreateMusic = (musicData: { name: string; artist: string; releaseDate: string }) => {
    createMusic(musicData, setMusics, setLoading);
    setMusicModalOpen(false); // Fechar o modal após a submissão
  };

  // Função para criar um novo álbum
  const handleCreateAlbum = (albumData: { name: string; artist: string; releaseDate: string }) => {
    createAlbum(albumData, setAlbums, setLoading);
    setAlbumModalOpen(false); // Fechar o modal após a submissão
  };

  // Função para deletar uma música
  const handleDeleteMusic = (id: number) => {
    deleteMusic(id, setMusics, setSelectedAlbum, setLoading);
  };

  // Função para deletar um álbum
  const handleDeleteAlbum = (id: number) => {
    deleteAlbum(id, setAlbums, setMusics, setSelectedAlbum, setLoading);
  };

  // Função para abrir o modal de edição de música
  const handleEditMusic = (music: IMusic) => {
    setSelectedMusic(music);
    setEditMusicModalOpen(true);
  };

  // Função para atualizar uma música
  const handleUpdateMusic = (updatedMusic: { name: string; artist: string; releaseDate: string }) => {
    if (selectedMusic) {
      updateMusic(selectedMusic.id, updatedMusic, setMusics, setLoading);
      setEditMusicModalOpen(false);
    }
  };

  // Função para abrir o modal de edição de álbum
  const handleEditAlbum = (album: IAlbum) => {
    setSelectedAlbumForEdit(album);
    setEditAlbumModalOpen(true);
  };

  // Função para atualizar um álbum
  const handleUpdateAlbum = (updatedAlbum: { name: string; artist: string; releaseDate: string }) => {
    if (selectedAlbumForEdit) {
      updateAlbum(selectedAlbumForEdit.id, updatedAlbum, setAlbums, setLoading);
      setEditAlbumModalOpen(false);
    }
  };

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
        onCreateMusic={() => setMusicModalOpen(true)} // Abre o modal para criar música
        onCreateAlbum={() => setAlbumModalOpen(true)} // Abre o modal para criar álbum
      />

      {loading && <div className="text-green-400">Carregando...</div>}

      {/* Modal de Criar Música */}
      <Modal
        title="Criar Nova Música"
        isOpen={isMusicModalOpen}
        onClose={() => setMusicModalOpen(false)}
        onSubmit={handleCreateMusic}
      />

      {/* Modal de Criar Álbum */}
      <Modal
        title="Criar Novo Álbum"
        isOpen={isAlbumModalOpen}
        onClose={() => setAlbumModalOpen(false)}
        onSubmit={handleCreateAlbum}
      />

      {/* Modal de Editar Música */}
      {selectedMusic && (
        <ModalUpdate
          isOpen={isEditMusicModalOpen}
          onClose={() => setEditMusicModalOpen(false)}
          initialData={selectedMusic}
          onUpdate={handleUpdateMusic}
        />
      )}

      {/* Modal de Editar Álbum */}
      {selectedAlbumForEdit && (
        <ModalUpdate
          isOpen={isEditAlbumModalOpen}
          onClose={() => setEditAlbumModalOpen(false)}
          initialData={selectedAlbumForEdit}
          onUpdate={handleUpdateAlbum}
        />
      )}

      {musics.length > 0 && !selectedAlbum && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-full px-6">
          {musics.map((music) => (
            <MusicCard
              key={music.id}
              id={music.id}
              name={music.name}
              artist={music.artist}
              releaseDate={music.releaseDate}
              albumId={music.albumId}
              onDelete={() => handleDeleteMusic(music.id)}
              onEdit={() => handleEditMusic(music)} // Passa a música para ser editada
            />
          ))}
        </div>
      )}

      {albums.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full px-6">
          {albums.map((album) => (
            <AlbumCard
              key={album.id}
              id={album.id}
              name={album.name}
              artist={album.artist}
              releaseDate={album.releaseDate}
              onClick={() => fetchAlbumMusics(album.id, setMusics, setSelectedAlbum, setLoading)}
              onDelete={() => handleDeleteAlbum(album.id)}
              onEdit={() => handleEditAlbum(album)} // Passa o álbum para ser editado
            />
          ))}
        </div>
      )}

      {selectedAlbum && musics.length > 0 && (
        <div className="w-full px-6">
          <h2 className="text-3xl font-bold text-green-400 mb-4">Músicas do Álbum</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {musics.map((music) => (
              <MusicCard
                id={music.id}
                key={music.id}
                name={music.name}
                artist={music.artist}
                releaseDate={music.releaseDate}
                albumId={music.albumId = null}
                onDelete={() => handleEditAlbum(music)}
                onEdit={() => handleEditMusic(music)} // Permitir edição das músicas do álbum
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
