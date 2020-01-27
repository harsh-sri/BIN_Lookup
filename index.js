const express = require('express')
const app = express()
const port = 8080;
const lookup = require('binlookup')();
const card_prefix = '4571';

app.get('/', async (req, res) => {
    const card_suffix = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    const card = `${card_prefix}${card_suffix}`;
    lookup(card)
    .then(data => res.json({status: `Success for Card: ${card}`}))
    .catch(err => res.json(err));
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))