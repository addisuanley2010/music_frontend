export interface MusicInterface {
  _id?: string,
  title: string;
  artist: string;
  album: string;
  gener: string;
}
export interface StatInterface {
  totalMusic: number,
  totalArtists: number,
  totalAlbums: number,
  totalGenres: number,
}
export interface Counts {
  title: {
    [key: string]: number;
  };
  artist: {
    [key: string]: number;
  };
  album: {
    [key: string]: number;
  };
  gener: {
    [key: string]: number;
  };
  albumsPerArtist:{
     [key: string]: {
    [key: string]: number;
  };
  }
}




export interface AlbumsPerArtistInterface {
  [key: string]: {
    [key: string]: number;
  };
}
