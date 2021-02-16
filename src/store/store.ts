import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {combineReducers} from 'redux';
import rootSaga from './sagas';
import { companiesReducer } from './ducks/companies/reducer';
import { CompaniesState } from './ducks/companies/contracts';

const rootReducer = combineReducers({
    companiesState: companiesReducer
})

export type State = {
    companiesState: CompaniesState
}

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))   

sagaMiddleware.run(rootSaga)