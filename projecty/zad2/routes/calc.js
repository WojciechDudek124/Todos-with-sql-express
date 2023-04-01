const express = require('express');
const calcRouter = express.Router();

calcRouter
    .post('/check',  (req, res)=>{
        const {a , b} = req.body;

        if (a % b === 0){
            res.json({divider:true});
        }else {
            res.json({divider:false});
        }

});

module.exports = {
    calcRouter,
};