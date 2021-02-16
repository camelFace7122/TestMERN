import dotenv from 'dotenv'
import path from 'path'

const root = path.join.bind(this, __dirname)
dotenv.config({ path: root('.env') })

export const config = {
    IS_PRODUCTION: process.env.NODE_ENV === 'production',
    PORT: process.env.PORT || 3001,
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:127.0.0.1:27017/TestMERN'
}