
import createSagaMiddleware from 'redux-saga';
import { inputReducer } from './redux/features/inputSlice'
import { musicReducer } from './redux/features/musicSlice'
import { rootSaga } from './redux/saga/rootSaga';
import { statReducer } from './redux/features/statSlice';
import { countReducer } from './redux/features/countSlice';
import { sideNavReducer } from './redux/features/sideNavSlice';
import { configureStore } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();



export const store = configureStore({
  reducer: {
    music: musicReducer,
    inputMusic: inputReducer,
    stat:statReducer,
    count:countReducer,
    sideNav:sideNavReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

