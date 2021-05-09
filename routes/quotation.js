const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {

    res.render('quotation/quotation_home', {pageTitle:"Quotation Home"});
});

module.exports = router;