import { Action } from "redux"
import { CompaniesState, Company } from "./contracts"

export enum CompaniesActionTypes {
    SET_COMPANY_LIST = 'companies/SET_COMPANY_LIST',
    FETCH_COMPANY_LIST = 'companies/FETCH_COMPANY_LIST',
    SET_COMPANY_LIST_LOADING_STATE = 'companies/SET_COMPANY_LIST_LOADING_STATE',
    ADD_COMPANY = 'companies/ADD_COMPANY',
    SET_ADD_COMPANY_LOADING_STATE = 'companies/SET_ADD_COMPANY_LOADING_STATE',
    EDIT_COMPANY = 'companies/EDIT_COMPANY',
    SET_CURRENT_COMPANY = 'companies/SET_CURRENT_COMPANY',
    DELETE_COMPANY = 'companies/DELETE_COMPANY',
    SET_DELETE_COMPANY_LOADING_STATE = 'companies/SET_DELETE_COMPANY_LOADING_STATE',
}

interface ISetCompanyListAction extends Action<CompaniesActionTypes> {
    type: CompaniesActionTypes.SET_COMPANY_LIST
    payload: CompaniesState['items']
}

interface IFetchCompanyListAction extends Action<CompaniesActionTypes> {
    type: CompaniesActionTypes.FETCH_COMPANY_LIST
}

interface ISetCompanyListLoadingStateAction extends Action<CompaniesActionTypes> {
    type: CompaniesActionTypes.SET_COMPANY_LIST_LOADING_STATE,
    payload: CompaniesState['loadingState']
}

export interface IAddCompanyAction extends Action<CompaniesActionTypes> {
    type: CompaniesActionTypes.ADD_COMPANY,
    payload: Company
}

export interface IEditCompanyAction extends Action<CompaniesActionTypes> {
    type: CompaniesActionTypes.EDIT_COMPANY,
    payload: Company
}

interface ISetAddCompanyLoadingStateAction extends Action<CompaniesActionTypes> {
    type: CompaniesActionTypes.SET_ADD_COMPANY_LOADING_STATE,
    payload: CompaniesState['addCompanyLoadingState']
}

interface ISetCurrentCompanyAction extends Action<CompaniesActionTypes> {
    type: CompaniesActionTypes.SET_CURRENT_COMPANY,
    payload: Company | undefined
}

export interface IDeleteCompanyAction extends Action<CompaniesActionTypes> {
    type: CompaniesActionTypes.DELETE_COMPANY,
    payload: Company
}

interface ISetDeleteCompanyLoadingStateAction extends Action<CompaniesActionTypes> {
    type: CompaniesActionTypes.SET_DELETE_COMPANY_LOADING_STATE,
    payload: CompaniesState['deleteCompanyLoadingState']
}

export const setCompanyList = (payload: CompaniesState['items']): ISetCompanyListAction => {
    return {
        type: CompaniesActionTypes.SET_COMPANY_LIST,
        payload,
    }
}

export const fetchCompanyList = (): IFetchCompanyListAction => {
    return {
        type: CompaniesActionTypes.FETCH_COMPANY_LIST
    }
}

export const setCompanyListLoadingState = (payload: CompaniesState['loadingState']): ISetCompanyListLoadingStateAction => {
    return {
        type: CompaniesActionTypes.SET_COMPANY_LIST_LOADING_STATE,
        payload,
    }
}

export const addCompany = (payload: Company): IAddCompanyAction => {
    return {
        type: CompaniesActionTypes.ADD_COMPANY,
        payload,
    }
}

export const setAddCompanyLoadingState = (payload: CompaniesState['addCompanyLoadingState']): ISetAddCompanyLoadingStateAction => {
    return {
        type: CompaniesActionTypes.SET_ADD_COMPANY_LOADING_STATE,
        payload,
    }
}

export const editCompany = (payload: Company): IEditCompanyAction => {
    return {
        type: CompaniesActionTypes.EDIT_COMPANY,
        payload
    }
}

export const setCurrentCompany = (payload: Company | undefined): ISetCurrentCompanyAction => {
    return {
        type: CompaniesActionTypes.SET_CURRENT_COMPANY,
        payload
    }
}

export const deleteCompany = (payload: Company): IDeleteCompanyAction => {
    return {
        type: CompaniesActionTypes.DELETE_COMPANY,
        payload
    } 
}

export const setDeleteCompanyLoadingState = (payload: CompaniesState['deleteCompanyLoadingState']): ISetDeleteCompanyLoadingStateAction => {
    return {
        type: CompaniesActionTypes.SET_DELETE_COMPANY_LOADING_STATE,
        payload
    }
}

export type CompaniesActions = ISetCompanyListAction | IFetchCompanyListAction 
                            | ISetCompanyListLoadingStateAction | IAddCompanyAction 
                            | ISetAddCompanyLoadingStateAction | IEditCompanyAction
                            | ISetCurrentCompanyAction | IDeleteCompanyAction | ISetDeleteCompanyLoadingStateAction