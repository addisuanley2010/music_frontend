import { call, put, takeEvery } from 'redux-saga/effects';
import { api } from '../../api';
import { addMusic, closeLoading, deleteMusic, getMusic, getMusicLoading, updateMusic } from '../features/musicSlice';
import axios from 'axios';
// import { addMusicToStore } from '../features/inputSlice';
import { getStat } from '../features/statSlice';
import { getArtist } from '../features/countSlice';


// interface myType { type: string, _id?: string, title: string, artist: string, album: string, gener: string }

type CallReturnType = ReturnType<typeof axios.post>;
interface mytype {
  type: string,
  id: string
}


// ...................GET ALL MUSIC...............................
 function* handleGetMusic(action: any) {
    try {
      const { filterType, filterValue } = action.payload || {}
      let url = `${api}/get`
      if (filterType && filterValue) {
        url = `${api}/filter?${filterType}=${filterValue}`
      }
      const { data } = yield call(axios.get, url)
      yield put(getMusic(data?.response))
    } catch (error) {
      yield put(closeLoading(' failed. try again later!'))
    }
}

// ...................DELETE MUSIC...............................

function* handleDeleteTodoSaga(action: mytype) {

  try {

    const { data } = yield call(axios.delete, `${api}/delete/${action.id}`)
    const id: string = data?.response._id
    yield put(deleteMusic(id));
    yield put(closeLoading(data?.message))
    yield getStatics()

  } catch (error) {
    yield put(closeLoading('delete failed. try again later!'))
  }


}
// ...................ADD MUSIC...............................
function* handleAddMusic(action: any) {//myType

  const { title, album, gener, artist } = action.formData;

  try {


    const response: CallReturnType = yield call(axios.post, `${api}/create`, { title, album, gener, artist });
    const { data } = yield response
    yield put(addMusic(data?.response));
    yield put(closeLoading(data?.message))
    yield getStatics()


  } catch (error) {
    yield put(closeLoading('create failed. try again later!'))
  }
}

// ...................UPDATE MUSIC...............................
function* handleEditMusic(action: any) {//myType
  const { _id, title, album, gener, artist } = action.formData;
  try {


    const response: CallReturnType = yield call(axios.put, `${api}/update/${_id}`, { title, album, gener, artist });

    const { data } = yield response
    yield put(updateMusic(data?.response));
    yield put(closeLoading(data?.message))
    yield getStatics()


  } catch (error) {
    yield put(closeLoading('update failed. try again later!'))
  }
}


// ...................GET STATISTICS...............................
function* getStatics() {

  const { data } = yield call(axios.get, `${api}/getStatistics`)
  const { totalAlbums, totalArtists, totalGenres, totalMusic } = yield data
  yield put(getStat({ totalAlbums, totalArtists, totalGenres, totalMusic }))
  yield put(getArtist(data.counts))
}


// ....................................... END OF SAGA ...................................
export function* watcMusicSaga() {
  yield takeEvery(getMusicLoading, handleGetMusic);
  yield takeEvery('DELETE', handleDeleteTodoSaga);
  yield takeEvery('CREATE_MUSIC', handleAddMusic);
  yield takeEvery('UPDATE_MUSIC', handleEditMusic);
  yield takeEvery('GET_STATISTICS', getStatics);



}