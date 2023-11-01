import mongoose, { ConnectOptions } from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const dbHost: string = process.env.MONGODB_HOST || ''
const dbPort: string = process.env.MONGODB_PORT || ''
const dbMainName: string = process.env.MONGODB_DB_MAIN || ''

const dbURL: string = `mongodb://${dbHost}:${dbPort}/${dbMainName}`

mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  } as ConnectOptions)
  .then(() => {
    console.log('Connected to main database')
  })
  .catch((error: Error) => {
    console.error('Error connecting to main database:', error)
  })

export default mongoose
