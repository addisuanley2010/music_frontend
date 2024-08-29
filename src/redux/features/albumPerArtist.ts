import {  createSlice } from "@reduxjs/toolkit";
import {  AlbumsPerArtistInterface } from "../../interface/musicInterface";

const initialState: AlbumsPerArtistInterface = {};


const albumsPerArtistSlice = createSlice({
  name: 'albumsPerArtist',
  initialState,
  reducers: {
    // Define your reducers here if needed
  }
});
export const {  } = albumsPerArtistSlice.actions
export const albumsPerArtistReducer = albumsPerArtistSlice.reducer;