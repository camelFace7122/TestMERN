import { Res } from "../controllers/contracts";

export function throwError(res: Res, status: number = 500, message?: string | Error) {
    if (message) {
        return res.status(status).json({
            status: 'error',
            error: message
        })
    } else {
        return res.status(status).send()
    }
    
}