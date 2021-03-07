const express = require("express");
const pool = require('../modules/pool');
const router = express.Router();
const stringMath = require('string-math');

// const pool = require("../modules/pool");
// const axios = require("axios");
// require("dotenv").config();


router.get("/", (req, res) => {
    const query = `SELECT * FROM "calculations" ORDER BY "id" DESC LIMIT 10;`;
    pool.query(query)
    .then(results => {
        res.send(results.rows);
    })
    .catch((err) => {
        console.log('err:', err);
        res.sendStatus(500);
    })});

router.post("/", (req, res) => {
    // console.log(Object.keys(req));
    const equation = req.body.payload
    const equationResult = stringMath(req.body.payload) 
    const fullEquation = equation+'='+equationResult;
    const queryText = `INSERT INTO "calculations"
    ("fullEquation")
    VALUES ($1)
    RETURNING "id";`
    pool
    .query(queryText, [fullEquation])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('err:', err);
      res.sendStatus(500);
    })
    //socket.io here
})

module.exports = router;
