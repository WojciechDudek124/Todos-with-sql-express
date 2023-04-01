const express = require('express');
const {TodoRecord} = require("../records/todo.record");

const taskRouter = express.Router();

taskRouter
    .get('/', async (req, res) => {
        const data = await TodoRecord.findAll();
        res.json(data)
    })

module.exports = {
    taskRouter,
}