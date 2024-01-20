const express = require('express')
const app = express()
app.post('/login', (req, res) => {
	res.send('Hello, you are on the login route')
})

app.post('/signup', (req, res) => {
	res.send('Hello, you are on the signup route')
})

app.listen(1338, () => {
	console.log(`Server is running on port 1338`)
})
app.get('/', (req, res) => {
	res.send('your server  is running')
})
