import { put, takeLatest } from 'redux-saga/effects'
import { CompaniesAPI } from '../../../api/CompaniesAPI'
import { CompaniesActionTypes, setCompanyList, setCompanyListLoadingState, IAddCompanyAction, setAddCompanyLoadingState, IEditCompanyAction, setCurrentCompany, IDeleteCompanyAction, setDeleteCompanyLoadingState } from './actionCreators'
import { LoadingState } from './contracts'

export function* fetchCompanyListRequest() {
    try {
        const data = yield CompaniesAPI.fetchCompanyList()
        yield put(setCompanyList(data))
    } catch (err) { 
        yield put(setCompanyListLoadingState(LoadingState.ERROR))
        console.error(err)
    }
}

export function* addCompanyRequest({payload}: IAddCompanyAction) {
    try {
        const data = yield CompaniesAPI.addCompany(payload)
        yield fetchCompanyListRequest()
        yield put(setAddCompanyLoadingState(LoadingState.LOADED))
    } catch (err) { 
        yield put(setAddCompanyLoadingState(LoadingState.ERROR))
        console.error(err)
    }
}

export function* editCompanyRequest({payload}: IEditCompanyAction) {
    try {
        const data = yield CompaniesAPI.editCompany(payload)
        yield fetchCompanyListRequest()
        yield put(setAddCompanyLoadingState(LoadingState.LOADED))
        yield put(setCurrentCompany(data))
    } catch (err) {
        yield put(setAddCompanyLoadingState(LoadingState.ERROR))
        console.error(err)
    }
}

export function* deleteCompanyRequest({payload}: IDeleteCompanyAction) {
    try {
        yield CompaniesAPI.deleleCompany(payload)
        yield fetchCompanyListRequest()
        yield put(setDeleteCompanyLoadingState(LoadingState.LOADED))
        yield put(setCurrentCompany(undefined))
    } catch (err) {
        yield put(setDeleteCompanyLoadingState(LoadingState.ERROR))
        console.error(err)
    }
}   

export function* companiesSaga() {
    yield takeLatest(CompaniesActionTypes.FETCH_COMPANY_LIST, fetchCompanyListRequest)
    yield takeLatest(CompaniesActionTypes.ADD_COMPANY, addCompanyRequest)
    yield takeLatest(CompaniesActionTypes.EDIT_COMPANY, editCompanyRequest)
    yield takeLatest(CompaniesActionTypes.DELETE_COMPANY, deleteCompanyRequest)
}