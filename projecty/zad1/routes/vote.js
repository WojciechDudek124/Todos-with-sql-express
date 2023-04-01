const express = require('express');

const voteRouter = express.Router();

let yes=0;
let no=0;

voteRouter
    .get ('/book', (req, res) =>{
    })
    .get ('/yes',(req, res) =>{
        res.send('DZIEKUJEMY ZA GLOS! ODDAŁES GLOS NA - TAK!');
        yes++;

    })
    .get ('/no',(req, res) =>{
        res.send('DZIEKUJEMY ZA GLOS! ODDAŁES GLOS NA - NIE!');
        no++;
    })
    .get ('/check',(req, res) =>{
        res.send(`${yes} , ${no}`);
    });

module.exports = {
    voteRouter,
}