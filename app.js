const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const app = express();
const users = require('./routes/users');
const https = require('https');
const fs = require('fs');

const config = require('./config/database');

mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true });

// on connection
mongoose.connection.on('connected', () => {
  console.log(`Connected to database ${config.database}`);
});

// on error 
mongoose.connection.on('error', (err) => {
  console.log(`Database error: ${err}`);
});

app.use(cors());
app.use(bodyParser.json());

// passport middleware 
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use('/users', users);

// Set static folder 
app.use(express.static(path.join(__dirname, 'public')));

// port number 
const port = process.env.PORT || 3000;

// start server 
app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});

// https.createServer({
//   key: fs.readFileSync('caPrivateKey.pem'),
//   cert: fs.readFileSync('caCert.pem')
// }, app).listen(port, function () {
//   console.log('Https server started on port ' + port);
// });
