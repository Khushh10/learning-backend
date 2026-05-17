const express = require('express')
const app = express()
const PORT = 8383

let data = {
    name: 'Khush'
}

app.get('/', (req, res) => {
    res.send(`
        <body>
        <p>${JSON.stringify(data)}</p>
        </body>
        `)
})

app.get('/dashboard', (req, res) => {
    res.send('<h1>Dashboard</h1>')
})


app.get('/api/data', (req, res) => {
    console.log('API endpoint hit')
    res.send(data)
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}!!`))