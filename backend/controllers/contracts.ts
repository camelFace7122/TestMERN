import {Request, Response} from 'express';
import {ParamsDictionary} from 'express-serve-static-core'

export type Req<T= any> = Request<ParamsDictionary, any, T>  
export type Res<T= any> = Response<T>  

export interface ICreateCompanyReq {
    name: string 
    location: string
    logo: string
}