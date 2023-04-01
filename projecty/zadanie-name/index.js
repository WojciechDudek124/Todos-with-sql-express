const express = require('express');
const {nameRouter} = require("./routes/name");
const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

const app = express();

app.use(express.json());

app.use(limiter);

app.use('/name', nameRouter);

app.listen(3000, 'localhost');