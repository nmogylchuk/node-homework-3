const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('config');

const log = require('./routes/middleware/log');
const auth = require('./routes/middleware/auth');


const app = express();
const PORT = config.get('port') || 5000;

app.use(log);
// app.use(auth);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/auth', require('./routes/auth'));

async function start() {
    try {
        await mongoose.connect(config.get("mongoUri"), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`));
    }
    catch(error) {
        console.log('Server error', error);
        process.exit(1);
    }
}

start();