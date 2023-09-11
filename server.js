require('dotenv').config();
const http = require('http');
const app = require('./app/app');

const server = http.createServer(app);


app.get('/', (req, res)=>{
    res.json({message: 'Success.'});
})

const PORT = process.env.PORT || 8000;

server.listen(PORT, () =>{
    console.log(`Server is listening on the port ${PORT}`);
})