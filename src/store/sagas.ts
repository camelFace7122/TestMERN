import { all } from 'redux-saga/effects'
import { companiesSaga } from './ducks/companies/saga'

export default function* rootSaga() {
    yield all([
        companiesSaga()
    ])
}