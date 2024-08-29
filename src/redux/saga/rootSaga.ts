import { all } from "redux-saga/effects";
import { watcMusicSaga } from "./musicSaga";

export function* rootSaga() {
    yield all([
        watcMusicSaga()
    ])
}