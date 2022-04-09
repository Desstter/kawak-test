const fs = require('fs');
const express = require('express')
const cors = require('cors');
const app = express();
const port = 3003;

app.use(express.json())

app.use(cors())

app.get('/', (req, res) => {
    res.send('Server is running');
})

app.post('/api/v1/add-food', cors(),(req, res)=> {
    const body = JSON.stringify(req.body);
    try {
        fs.writeFileSync(__dirname + '/ciudad.txt', body);
        res.json(body)
    }
    catch (error) {
        res.status(500).send(error)
    }
})

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})