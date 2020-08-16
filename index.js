const express = require('express');
const cors = require('cors');
const app = express();
const jwtGenerator = require('./utils/jwtGenerator');

//Apply the middlewares
app.use(express.json()); // allow us to receive requests from req.body
app.use(cors());

//ROUTES
//register and login routes
app.use('/auth', require('./routes/jwAuth'));

//dashboard route
app.use('dashboard', require('./routes/dashboard'));

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});