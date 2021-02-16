import {Schema, model, Document} from 'mongoose'

interface ICompany {
    _id?: string
    name: string
    location: string
    logo: string
}

type CompanyModel = ICompany & Document

const companySchema = new Schema<CompanyModel>({
    name: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true,
        unique: true
    }
}) 

export const Company = model<CompanyModel>('Company', companySchema) 