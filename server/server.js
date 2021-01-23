const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

const pool = require('../modules/pool');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/

Router.post('/', (req,res) => {
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


/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});

module.exports = router;