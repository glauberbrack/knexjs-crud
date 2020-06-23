const express = require('express')
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(routes)

//middleware
app.use((error, req, res, netx) => {
    res.status(error.status || 500)
    res.json({error: error.message})
})


app.listen(3333, () => console.log('Server is running'))