const express = require('express');
const hbs = require('express-handlebars');
const methodOverride = require('method-override');

const {pool} = require("./utils/db");
const {TodoRecord} = require("./records/todo.record");

const app = express();

app.use(methodOverride('_method'));
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.static('public'));
app.use(express.json())

app.engine('.hbs', hbs.engine({
    extname:'.hbs',
}));
app.set('view engine', 'hbs');


(async() =>{

    // const firstTodoItem = new TodoRecord({
    //     title: 'umyc sie',
    // });
    //
    // const newId = await firstTodoItem.insert();
    //
    // console.log('New todo item added with ID:', newId);
    //
    // await firstTodoItem.delete();

    const foundTodo = await TodoRecord.find('exxx');

    console.log(foundTodo);

    await pool.end();
})();