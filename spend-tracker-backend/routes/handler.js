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


router.get('/addExpense', async(req, res) => {
const expense = {itemName: 'Food', price: 5}
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


//Expense Schema



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


module.exports = {router: router, defaultExpenses: defaultExpenses};