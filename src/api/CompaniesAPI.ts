import axios, {AxiosResponse} from 'axios'
import { CompaniesState, Company } from '../store/ducks/companies/contracts'

export const CompaniesAPI = {
    fetchCompanyList: async(): Promise<AxiosResponse<CompaniesState['items']> | undefined> => {
        try {
            const data = await axios.get('/companies')
            return data.data.data
        } catch (err) {
            console.error(err)
            throw err
        }
    },
    addCompany: async(payload: Company): Promise<AxiosResponse<Company> | undefined> => {
        try {
            const data = await axios.post('/companies', payload)
            return data.data.data
        } catch (err) {
            console.error(err)
            throw err
        }
    },
    editCompany: async(payload: Company): Promise<AxiosResponse<Company> | undefined> => {
        try {
            const data = await axios.put(`/companies/${payload._id}`, payload)
            return data.data.data
        } catch (err) {
            console.error(err)
            throw err
        }
    },
    deleleCompany: async(payload: Company): Promise<AxiosResponse<{status: string}> | undefined> => {
        try {
            const data = await axios.delete(`/companies/${payload._id}`)
            return data.data
        } catch (err) {
            console.error(err)
            throw err
        }
    }
}