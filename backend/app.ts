import express from 'express'
import { config } from './config'
import { CompaniesCtrl } from './controllers/CompaniesController'
import { Req, Res } from './controllers/contracts'
import './core/db'
import { throwError } from './helpers/throwError'
import { companyValidations } from './validations/companyValidations'

const app = express()

app.use(express.json())

app.get('/', (_: express.Request, res: express.Response) => {
    res.redirect('/about')
})

app.get('/about', (_: express.Request, res: express.Response) => {
    res.status(200).send()
})

app.get('/companies', CompaniesCtrl.index)

app.post('/companies', companyValidations, CompaniesCtrl.create)

app.put('/companies/:id', companyValidations, CompaniesCtrl.update)

app.delete('/companies/:id', CompaniesCtrl.delete)

app.use((_1: Req, res: Res): void => {
    throwError(res, 404, 'Страница не найдена')
})

app.use((err: Error, _: express.Request, res: express.Response) => {
    throwError(res, 500, err)
})

app.listen(config.PORT, () => {
    console.log(`Application was started on http://localhost:${config.PORT}`)
})
