const express = require('express');
const {TodoRecord} = require("../records/todo.record");

const taskRouter = express.Router();

taskRouter
    .get('/', async (req, res) => {
        const tasks = await TodoRecord.findAll();
        res.render('tasks/list-all', {
            tasks
        })
    })

module.exports = {
    taskRouter,
}