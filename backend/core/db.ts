import mongoose from 'mongoose'
import { config } from '../config'

mongoose.Promise = Promise

mongoose.connect(config.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => console.log(`Connected to database ${config.MONGO_URI}`))
.catch(err => console.error("An error has occured", err));

const db = mongoose.connection

db.on('error', function(err) {
    console.log("Connection to mongo failed" + err)
})

db.on('close', function() {
    console.log("Connection is closed")
    process.exit(0)
})