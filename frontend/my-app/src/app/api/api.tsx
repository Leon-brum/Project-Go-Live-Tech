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

// Função para criar uma nova música
export const createMusic = (musicData: { name: string; artist: string; releaseDate: string }, setNewMusic: any, setLoading: any) => {
  setLoading(true);
  $.ajax({
    url: 'http://localhost:3000/music',
    method: 'POST',
    data: JSON.stringify(musicData),
    contentType: 'application/json',
    success: (newMusic) => {
      setNewMusic((prevMusics: any) => [...prevMusics, newMusic]);
      setLoading(false);
    },
    error: (err) => {
      console.error('Erro ao criar música:', err);
      setLoading(false);
    },
  });
};

// Função para criar um novo álbum
export const createAlbum = (albumData: any, setAlbums: any, setLoading: any) => {
  setLoading(true);
  $.ajax({
    url: 'http://localhost:3000/album',
    method: 'POST',
    data: JSON.stringify(albumData),
    contentType: 'application/json',
    success: (newAlbum) => {
      setAlbums((prevAlbums: any) => [...prevAlbums, newAlbum]);
      setLoading(false);
    },
    error: (err) => {
      console.error('Erro ao criar álbum:', err);
      setLoading(false);
    },
  });
};

export const deleteMusic = (id: number, setMusics: (data: any) => void, setSelectedAlbum: (albumId: number | null) => void, setLoading: (loading: boolean) => void) => {
  setLoading(true);
  $.ajax({
    url: `http://localhost:3000/music/${id}`,
    method: 'DELETE',
    success: () => {
      fetchMusics(setMusics, setSelectedAlbum, setLoading); // Atualiza a lista de músicas
      setLoading(false);
    },
    error: (err) => {
      console.error('Erro ao deletar música:', err);
      setLoading(false);
    },
  });
};

// Função para deletar um álbum
export const deleteAlbum = (id: number, setAlbums: (data: any) => void, setMusics: (data: any) => void, setSelectedAlbum: (albumId: number | null) => void, setLoading: (loading: boolean) => void) => {
  setLoading(true);
  $.ajax({
    url: `http://localhost:3000/album/${id}`,
    method: 'DELETE',
    success: () => {
      fetchAlbums(setAlbums, setMusics, setSelectedAlbum, setLoading); // Atualiza a lista de álbuns
      setMusics([]); // Limpa a lista de músicas ao deletar um álbum
      setLoading(false);
    },
    error: (err) => {
      console.error('Erro ao deletar álbum:', err);
      setLoading(false);
    },
  });
};

export const updateMusic = (
  id: number,
  musicData: { name: string; artist: string; releaseDate: string },
  setMusics: any,
  setLoading: any
) => {
  setLoading(true);
  $.ajax({
    url: `http://localhost:3000/music/${id}`,
    method: 'PUT',
    data: JSON.stringify(musicData),
    contentType: 'application/json',
    success: (updatedMusic) => {
      setMusics((prevMusics: any) =>
        prevMusics.map((music: any) => (music.id === id ? updatedMusic : music))
      );
      setLoading(false);
    },
    error: (err) => {
      console.error('Erro ao atualizar música:', err);
      setLoading(false);
    },
  });
};

export const updateAlbum = (
  id: number,
  albumData: { 
    name: string; 
    artist: string;
    releaseDate: string },
  setAlbums: any,
  setLoading: any
) => {
  setLoading(true);
  $.ajax({
    url: `http://localhost:3000/album/${id}`,
    method: 'PUT',
    data: JSON.stringify(albumData),
    contentType: 'application/json',
    success: (updatedAlbum) => {
      setAlbums((prevAlbums: any) =>
        prevAlbums.map((album: any) => (album.id === id ? updatedAlbum : album))
      );
      setLoading(false);
    },
    error: (err) => {
      console.error('Erro ao atualizar álbum:', err);
      setLoading(false);
    },
  });
};
