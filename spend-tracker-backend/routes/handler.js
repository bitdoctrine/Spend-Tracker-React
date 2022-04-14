const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");


const expenseSchema = new mongoose.Schema({
    purchaseDatae: {type: Date, default: new Date().toLocaleDateString()},
    itemName: {type: String, required: true},
    price: {type: Number, required: true}
})

const previousSchema = new mongoose.Schema({
    date: {type: Date, default: new Date().toLocaleDateString()},
    dailyEntry: expenseSchema,
})

const Day = mongoose.model('Day', previousSchema);


const Expense  = mongoose.model('Expense', expenseSchema);


//Add Expense Backend Format
router.get('/addExpense', async(req, res) => {
const expense = {itemName: 'Water', price: 3}
const newExpense = new Expense(expense);

  try {
    await newExpense.save( async(err, newExpenseResult) => {
        console.log('Data Added Successfully');
        res.end('New Expense Created');
    });
} catch(err) {
    console.log(err)
    res.end('User not added')
}
})


//Read Expense Backend Format

router.get('/readExpenses', (req, res) => {
    Expense.find({}, function(err, result) {
        if(err) {
            console.log('An error has occured');
            res.end(`Couldn't fetch data`);
        } else {
            console.log(result);
            res.end(JSON.stringify(result));
        }
    })
})


router.get('/deleteAll', (req, res) => {
    Expense.deleteMany({}, (err, result) => {
        if(err) {
            res.end('An error has occured');
        } else {
            res.end(
                'All data deleted Successfully'
            )
        }
    })
})


router.get('/previous', (req, res) => {
    Expense.find({}, function(err, result) {
        if(err) {
            console.log('An error occured');
        } else {
            console.log('Success');
            res.end(JSON.stringify(result));
        }
    })
});

router.post('/addExpense', (req, res) => {

});


module.exports = router