const express = require('express');
const hbs = require('express-handlebars');
const methodOverride = require('method-override');
const {homeRouter} = require("./routers/home");
const {taskRouter} = require("./routers/task");


const app = express();
app.use(express.static('public'))
app.use(methodOverride('_method'));
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());


app.engine('.hbs', hbs.engine({
    extname:'.hbs',
}));
app.set('view engine', 'hbs');

app.use('/', homeRouter);
app.use('/task', taskRouter);


app.listen(3000, 'localhost', () => {
    console.log('Listening on localhost http://localhost:3000');
});

