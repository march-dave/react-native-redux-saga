import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios';
import ContactActionCreator from './Action'

const apiHost = "https://gist.githubusercontent.com/dsandin/7b7cd2b834abd8c10908803cac5d1dd3/raw/9a8c0270e0f7a778409b2996419bacdbb06edc87/users_page1"

function* fetchUser() {
   try {
    const { data } = yield axios.get(apiHost);
      yield put(ContactActionCreator.changeName(data));
   } catch (e) {
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* mySaga() {
  // SET_PAGES 이름이다. 액션에서 비동기 처리 하지 아니 하고 여기서 처리 한다. 
  // 액센에서 SET_PAGES 이것을 요구 하면  fetchUser() 을 비동기 적으로 실행한다.
  yield takeEvery("SET_PAGES", fetchUser);
}

export default mySaga;