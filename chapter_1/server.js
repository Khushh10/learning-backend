const express = require('express')
const app = express()
const PORT = 8383

let data = ['Khush']

//Middleware
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`
        <body>
        <h1>Data</h1>
        <p>${JSON.stringify(data)}</p>
        <a href="/dashboard">Go to Dashboard</a>
        </body>
        `)
})

app.get('/dashboard', (req, res) => {
    res.send(`
        <body>
        <h1>Dashboard</h1>
        <a href="/">Go back to Home</a>
        </body>
        `)
})


app.get('/api/data', (req, res) => {
    console.log('API endpoint hit')
    res.send(data)
})


app.post('/api/data', (req, res) => {
    const newEntry = req.body
    console.log('Received new data:', newEntry)
    data.push(newEntry.name)
    res.sendStatus(201)
})

app.delete('/api/data', (req, res) => {
    data.pop()
    console.log('Deleted last entry')
    res.sendStatus(203)
})
app.listen(PORT, () => console.log(`Server started on port ${PORT}!!`))