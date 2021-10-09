const fs = require('fs')
const express = require('express')
const app = express()

app.use(express.static('dist'));

app.listen(8080, () => {
    console.log('server listen on port 8080...')
})