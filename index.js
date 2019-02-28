require('dotenv').config()
const express = require('express')
const http = require('http')
const path = require('path')
const db = require('./db')
console.log(db)

let app = express()
	.use(express.static(
		path.join(__dirname + '/static')))
	.get('/', (request, response) => {
 	response.send('helloWord')
 	})
 
 http.createServer(app)
 .listen(process.env.HTTP_PORT, process.env.HTTP_HOST, () => {
 console.log(`server runnig @ ${process.env.HTTP_HOST}:${process.env.HTTP_PORT}`)
 })

