import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios';
import ContactActionCreator from './Action'

const apiHost = "https://gist.githubusercontent.com/dsandin/7b7cd2b834abd8c10908803cac5d1dd3/raw/9a8c0270e0f7a778409b2996419bacdbb06edc87/users_page1"


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser() {
   try {
    const { data } = yield axios.get(apiHost);
      yield put(ContactActionCreator.changeName(data));
   } catch (e) {
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* mySaga() {
  yield takeEvery("SET_PAGES", fetchUser);
}

export default mySaga;