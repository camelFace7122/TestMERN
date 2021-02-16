import produce, { Draft } from 'immer';
import { CompaniesState, LoadingState } from './contracts';
import { CompaniesActions, CompaniesActionTypes } from './actionCreators'  

const initialTweetsState: CompaniesState = {
    items: [],
    loadingState: LoadingState.NEVER,
    addCompanyLoadingState: LoadingState.NEVER,
    currentCompany: undefined,
    deleteCompanyLoadingState: LoadingState.NEVER
}

export const companiesReducer = produce((draft: Draft<CompaniesState>, action: CompaniesActions) => {
    switch (action.type) {
        case CompaniesActionTypes.SET_COMPANY_LIST: 
            draft.items = action.payload
            draft.loadingState = LoadingState.LOADED
            break;
        case CompaniesActionTypes.FETCH_COMPANY_LIST:
            draft.items = []
            draft.loadingState = LoadingState.LOADING
            break;
        case CompaniesActionTypes.SET_COMPANY_LIST_LOADING_STATE:
            draft.loadingState = action.payload
            break;
        case CompaniesActionTypes.ADD_COMPANY:
            draft.addCompanyLoadingState = LoadingState.LOADING
            break;
        case CompaniesActionTypes.SET_ADD_COMPANY_LOADING_STATE:
            draft.addCompanyLoadingState = action.payload
            break;
        case CompaniesActionTypes.EDIT_COMPANY:
            draft.addCompanyLoadingState = LoadingState.LOADING
            break;
        case CompaniesActionTypes.SET_CURRENT_COMPANY:
            draft.currentCompany = action.payload
            break;
        case CompaniesActionTypes.DELETE_COMPANY:
            draft.deleteCompanyLoadingState = LoadingState.LOADING
            break;
        case CompaniesActionTypes.SET_DELETE_COMPANY_LOADING_STATE:
            draft.deleteCompanyLoadingState = action.payload
            break;
    }   
}, initialTweetsState)