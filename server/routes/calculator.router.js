const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const stringMath = require("string-math");

router.get("/", async (req, res) => {
  try {
    const query = `SELECT * FROM "calculations" ORDER BY "id" DESC LIMIT 10;`;
    const results = await pool.query(query);
    res.send(results.rows);
  } catch (err) {
    console.log("err:", err);
    res.sendStatus(500);
  }
});

router.post("/", async (req, res) => {
  try {
    const equation = req.body.payload;
    const equationResult = stringMath(req.body.payload);
    const fullEquation = equation + "=" + equationResult;
    const queryText = `INSERT INTO "calculations"
        ("fullEquation")
        VALUES ($1)
        RETURNING "id";`;
    await pool.query(queryText, [fullEquation]);
    res.sendStatus(201);
  } catch (err) {
    console.log("err:", err);
    res.sendStatus(500);
  }
});

module.exports = router;
