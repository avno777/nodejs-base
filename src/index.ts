'use strict'
import express from 'express'
import databaseConnection from './config/databaseConnnection'

const app = express()
const port = process.env.PORT || 3000
databaseConnection

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
