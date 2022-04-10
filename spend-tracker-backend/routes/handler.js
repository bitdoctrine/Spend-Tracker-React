const express = require('express');
const router = express.Router();

router.get('/previous', (req, res) => {
    const str = [{
        "Date": new Date().getDate(),
        "name": 'Some Item',
        "price": 'Some Number'
    }, {'Date': 'some date', 'price': 'some number', 'name': 'some name'}]
    res.end(JSON.stringify(str));
});

router.post('/addExpense', (req, res) => {
    res.end("Waiting");
});



module.exports = router;