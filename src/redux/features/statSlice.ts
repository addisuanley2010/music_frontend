import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {  StatInterface } from "../../interface/musicInterface";

const initialState: StatInterface = {
   totalMusic: 0,
    totalArtists: 0,
   totalAlbums: 0,
    totalGenres: 0,
};

const statSlice = createSlice({
    name: 'musicStat',
    initialState,
    reducers: {
          getStat: (state, action: PayloadAction<StatInterface>) => {//add single music to the store

state.totalMusic=action.payload.totalMusic
state.totalAlbums=action.payload.totalAlbums
state.totalArtists=action.payload.totalArtists
state.totalGenres=action.payload.totalGenres

//       state.musics.push(action.payload);
//       state.loading = false

    },
        },
        
    })

export const { getStat } = statSlice.actions
export const statReducer = statSlice.reducer;