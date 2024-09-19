import $ from 'jquery';

export const fetchMusics = (setMusics: any, setSelectedAlbum: any, setLoading: any) => {
  setLoading(true);
  $.ajax({
    url: 'http://localhost:3000/music',
    method: 'GET',
    success: (data) => {
      setMusics(data);
      setSelectedAlbum(null);
      setLoading(false);
    },
    error: (err) => {
      console.error('Erro ao buscar músicas:', err);
      setLoading(false);
    },
  });
};

export const fetchAlbums = (setAlbums: any, setMusics: any, setSelectedAlbum: any, setLoading: any) => {
  setLoading(true);
  $.ajax({
    url: 'http://localhost:3000/album',
    method: 'GET',
    success: (data) => {
      setAlbums(data);
      setMusics([]);
      setSelectedAlbum(null);
      setLoading(false);
    },
    error: (err) => {
      console.error('Erro ao buscar álbuns:', err);
      setLoading(false);
    },
  });
};

export const fetchAlbumMusics = (albumId: number, setMusics: any, setSelectedAlbum: any, setLoading: any) => {
  setLoading(true);
  $.ajax({
    url: `http://localhost:3000/music/album/${albumId}`,
    method: 'GET',
    success: (data) => {
      setMusics(data);
      setSelectedAlbum(albumId);
      setLoading(false);
    },
    error: (err) => {
      console.error('Erro ao buscar músicas do álbum:', err);
      setLoading(false);
    },
  });
};
