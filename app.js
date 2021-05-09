const express = require('express');
const bodyParser = require('body-parser');

const shopRoutes = require('./routes/shop');
const quoRoutes = require('./routes/quotation');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs');
app.use('/', shopRoutes);
app.use('/quotation/', quoRoutes);
app.use(express.static(__dirname + '/public'));

app.listen(3000);
