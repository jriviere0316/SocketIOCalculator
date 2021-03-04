const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World'); 

    });
    

module.exports = router;