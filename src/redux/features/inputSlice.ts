import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MusicInterface } from "../../interface/musicInterface";

const initialState: MusicInterface = {
    _id: '',
    title: '',
    artist: '',
    album: '',
    gener: ''
};

const inputSlice = createSlice({
    name: 'musicInput',
    initialState,
    reducers: {
        addMusicToStore: (state, action: PayloadAction<MusicInterface>) => {

            state = action.payload
            return state

        },
        
    }
})
export const { addMusicToStore } = inputSlice.actions
export const inputReducer = inputSlice.reducer;