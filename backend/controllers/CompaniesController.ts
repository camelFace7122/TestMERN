import { NextFunction } from 'express'
import { validationResult } from 'express-validator'
import { isValidObjectId } from 'mongoose'
import { throwError } from '../helpers/throwError'
import { Company } from '../models/Company'
import {ICreateCompanyReq, Req, Res} from './contracts'

class CompaniesController {
    async index(_: Req, res: Res, next: NextFunction) {
        try {
            const companies = await Company.find({}).exec()
        
            res.status(200).json({
                status: 'success',
                data: companies
            })
        } catch (err) {
            next(err)
        }
    }

    async create(req: Req<ICreateCompanyReq>, res: Res, next: NextFunction ) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const data: ICreateCompanyReq = {
                name: req.body.name,
                location: req.body.location,
                logo: req.body.logo
            }

            const company = await Company.create({...data})
            
            if (company) {
                res.status(200).json({
                    status: 'success',
                    data: company
                })
            }

        } catch (err) {
            next(err)
        }
    }

    async update(req: Req<ICreateCompanyReq>, res: Res, next: NextFunction ) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const id = req.params.id

            if (!isValidObjectId(id)) {
                return throwError(res, 400, 'Некорректный запрос')
            }

            const data: ICreateCompanyReq = {
                name: req.body.name,
                location: req.body.location,
                logo: req.body.logo
            }

            const company = await Company.findOneAndUpdate({_id: id}, data, {new: true}).exec()

            if (!company) {
                return throwError(res, 404, 'Страница не найдена')
            }
  
            res.status(200).json({
                status: 'success',
                data: company
            })

        } catch (err) {
            next(err)
        }
    }

    async delete(req: Req, res: Res, next: NextFunction ) {
        try {
            const id = req.params.id

            if (!isValidObjectId(id)) {
                return throwError(res, 400, 'Некорректный запрос')
            }

            const company = await Company.findOneAndRemove({_id: id}).exec()

            if (!company) {
                return throwError(res, 404, 'Страница не найдена')
            }
  
            res.status(200).json({
                status: 'success'
            })

        } catch (err) {
            next(err)
        }
    }
}

export const CompaniesCtrl = new CompaniesController()