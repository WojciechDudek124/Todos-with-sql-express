const express = require('express');
const {TodoRecord} = require("../records/todo.record");
const {db} = require("../projecty/client-base-CRM/utils/db");

const taskRouter = express.Router();

taskRouter
    .get('/', async (req, res) => {
        const tasks = await TodoRecord.findAll();
        res.render('tasks/list-all', {
            tasks
        })
    })

    .post ('/', async (req, res) => {
        const task = new TodoRecord({
            title: req.body.text,
        });

        console.log(task);
        await task.insert();

        res.status(201)
            .render(`tasks/add`);
    })

    .put('/:id', async (req,res)=>{
        const task = new TodoRecord({
            title: req.body.text,
            id: req.params.id,
        })

        console.log(task)
        await task.update()

        res.render('tasks/edited', {
            task
        });
    })

    .get('/edit/:id', async(req,res)=> {
        const id = req.params.id;
        const task = await TodoRecord.find(id);

        console.log(task);

        res.render('tasks/edit', {
            task
        });
    })

module.exports = {
    taskRouter,
}