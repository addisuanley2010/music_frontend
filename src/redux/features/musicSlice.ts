import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MusicInterface } from '../../interface/musicInterface';
import { toast } from 'react-toastify';

interface TodoState {
  musics: MusicInterface[];
  loading: boolean
  errorMessage: string
  success: boolean
}



const initialState: TodoState = {
  musics: [],
  loading: false,
  errorMessage: '',
  success: false
};

const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    getMusicLoading: (state) => { // to load function in saga file
      state.loading = true
    },
    makeLoading: (state) => {//to make loading true
      state.loading = true
    },
    closeLoading: (state, action: PayloadAction<string>) => {// to close loading in case failre happen
      state.loading = false
      state.errorMessage = action.payload
    },
    closeErrorMessage: (state) => {
      state.errorMessage = ''
      state.success=false
    },

    getMusic: (state, action: PayloadAction<MusicInterface[]>) => { // get music list from saga and add to music store
      state.loading = false
      state.musics = [...action.payload];

    },
    deleteMusic: (state, action: PayloadAction<string>) => {
      state.musics = state.musics.filter((music) => music._id !== action.payload);
      state.loading = false
      state.success=true
      

    },

    updateMusic: (state, action: PayloadAction<MusicInterface>) => {
      const index = state.musics.findIndex((music) => music._id === action.payload._id);
      if (index !== -1) {
        state.musics[index] = action.payload;
      }
      state.loading = false;
      state.success = true
    },

    addMusic: (state, action: PayloadAction<MusicInterface>) => {//add single music to the store
      state.loading = false
      state.musics.push(action.payload);
      state.success = true

    },

  },
});

export const { closeErrorMessage, closeLoading, makeLoading, getMusicLoading, getMusic, deleteMusic, addMusic, updateMusic } = musicSlice.actions;
export const musicReducer = musicSlice.reducer;