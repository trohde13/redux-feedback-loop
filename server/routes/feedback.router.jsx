const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


Router.post('/feedback', (req,res) => {
    let feedbackReducer = req.body;
    console.log('Adding feedback', feedbackReducer);
    let queryText = `
        INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [feedbackReducer.feeling, feedbackReducer.understanding, feedbackReducer.support, feedbackReducer.comments])
        .then(result => {
            res.sendStatus(201);
        }).catch(error => {
            console.log(`Error adding feedback`, error);
            res.sendStatus(500);
        })
});



module.exports = router;