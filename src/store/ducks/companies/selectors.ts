import { State } from "../../store";
import { LoadingState } from "./contracts";

export const selectCompaniesState = (state: State) => state.companiesState;

export const selectCompanyList = (state: State) => selectCompaniesState(state).items;

export const selectCompanyListloadingState = (state: State) => selectCompaniesState(state).loadingState

export const selectCompanyListIsLoading = (state: State) => selectCompaniesState(state).loadingState === LoadingState.LOADING

export const selectCompanyListIsLoaded = (state: State) => selectCompaniesState(state).loadingState === LoadingState.LOADED

export const selectCompanyListIsError = (state: State) => selectCompaniesState(state).loadingState === LoadingState.ERROR

export const selectAddCompanyLoadingState = (state: State) => selectCompaniesState(state).addCompanyLoadingState

export const selectAddCompanyIsLoading = (state: State) => selectAddCompanyLoadingState(state) === LoadingState.LOADING

export const selectAddCompanyIsLoaded = (state: State) => selectAddCompanyLoadingState(state) === LoadingState.LOADED

export const selectAddCompanyIsError = (state: State) => selectAddCompanyLoadingState(state) === LoadingState.ERROR

export const selectCurrentCompany = (state: State) => selectCompaniesState(state).currentCompany

export const selectDeleteCompanyLoadingState = (state: State) => selectCompaniesState(state).deleteCompanyLoadingState

export const selectDeleteCompanyIsLoading = (state: State) => selectDeleteCompanyLoadingState(state) === LoadingState.LOADING

export const selectDeleteCompanyIsLoaded = (state: State) => selectDeleteCompanyLoadingState(state) === LoadingState.LOADED

export const selectDeleteCompanyIsError = (state: State) => selectDeleteCompanyLoadingState(state) === LoadingState.ERROR
