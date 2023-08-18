import {getUsersAPI,getUsersByIdAPI,createUserAPI,updateUserAPI,deleteUserByIdAPI} from '../../apis/index'
import {put,takeEvery} from 'redux-saga/effects'
import {addUserSlice, editUserSlice, getUsersSlice} from '../slice/users'
import user, { setUserSlice } from '../slice/user'
import { CREATE_USER, DELETE_USER_BY_ID, GET_USERS, GET_USESR_BY_ID, UPDATE_USER_BY_ID } from './types'
export function* getUsersSaga  (){
    const users = yield getUsersAPI()
    yield put(getUsersSlice(users.data))

}

export function* getUserByIdSaga  (action)  {
    yield getUsersByIdAPI(action.id)
    yield put(setUserSlice(action.user))
}

export function* createUserSaga  (action)  {
    yield createUserAPI(action.user)
    yield put(addUserSlice(action.user))
}

export function* updateUserSaga  (action)  {
    yield updateUserAPI(action.user)
    yield put(editUserSlice(action.user))
}

export function* deleteUserByIdSaga  (action)  {
    yield deleteUserByIdAPI(action.id)
    yield put(editUserSlice(action.user))
}

export function* watchUsersAsync  ()  {
    yield takeEvery(GET_USERS,getUsersSaga)
    yield takeEvery(GET_USESR_BY_ID,getUserByIdSaga)
    yield takeEvery(CREATE_USER,createUserSaga)
    yield takeEvery(UPDATE_USER_BY_ID,updateUserSaga)
    yield takeEvery(DELETE_USER_BY_ID,deleteUserByIdSaga)
}