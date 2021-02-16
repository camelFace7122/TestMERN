export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}

export interface Company {
    _id?: string
    name: string
    location: string
    logo: string
}

export interface CompaniesState {
    items: Company[]
    loadingState: LoadingState,
    addCompanyLoadingState: LoadingState,
    currentCompany?: Company,
    deleteCompanyLoadingState: LoadingState,
}