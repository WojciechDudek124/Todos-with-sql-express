const express = require('express');
const cookieRouter = express.Router();


cookieRouter
    .post('/set',  (req, res)=>{
        const {name} = req.body

        if (name === ''){
            res.json('Podaj imie!');
        } else {
        res.
            cookie('name', name, {
                maxAge: 1000 * 60 * 60 * 24 * 30,
        })
            .json ('zapisano imię.');
        }
    })
    .get('/show', (req,res)=>{
        const {name} = req.cookies;

        res.json(name === undefined ? 'Brak imienia' : name);
    })
    .post('/check', (req,res)=>{
        const {name} = req.cookies;

        res.json(name === undefined ? 'Nie ma imienia' : 'Imie jest zapamietane');
    })


module.exports = {
    cookieRouter,
}