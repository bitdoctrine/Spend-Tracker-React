const express = require('express');
const router = express.Router();

router.get('/previous', (req, res) => {
    const str = [{
        "Date": new Date().getDate(),
        'Name': 'Some Item',
        'Price': 'Some Number'
    }, {'Date': 'some date', 'price': 'some price', 'name': 'some name'}]
    res.end(JSON.stringify(str));
});

router.post('/addExpense', (req, res) => {
    res.end("Waiting");
});



module.exports = router;