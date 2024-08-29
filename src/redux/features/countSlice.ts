
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Counts } from "../../interface/musicInterface";

const initialState: Counts = {
        title: {

        },
        artist: {

        },
        album: {

        },
        gener: {

        },
        albumsPerArtist:{
                
        }
};

const countSlice = createSlice({
        name: 'musicInput',
        initialState,
        reducers: {
                getArtist: (state, action: PayloadAction<Counts>) => {

                        state = action.payload
                        return state

                },

        }
})
export const { getArtist} = countSlice.actions
export const countReducer = countSlice.reducer;