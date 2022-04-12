const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String, required: true},
    fullName: {type: String, required: true},
    entryDate: {type: Date, default: Date.now}
})


const expenseSchema = new Schema({
    purchaseDatae: {type: Date, default: Date.now},
    itemName: {type: String, required: true},
    price: {type: Number, required: true}
})


const User = mongoose.model('users', userSchema, 'users');
const Expense = mongoose.model('expenses', expenseSchema, 'expenses');
const mySchemas = {'Users': User, 'Expenses': Expense};


module.exports = mySchemas;