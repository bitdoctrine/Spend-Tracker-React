const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");


const expenseSchema = new mongoose.Schema({
    purchaseDatae: {type: Date, default: Date.now},
    itemName: {type: String, required: true},
    price: {type: Number, required: true}
})


const Expense  = mongoose.model('Expense', expenseSchema);

const expense1 = new Expense({
    itemName: 'Some name', price: 500
})


const expense2 = new Expense({
    itemName: 'Some name', price: 500
})

const expense3 = new Expense({
    itemName: 'Some name', price: 500
})

const defaultExpenses = [expense1, expense2, expense3]

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
    res.end("Waiting");
});


module.exports = {router: router, defaultExpenses: defaultExpenses};