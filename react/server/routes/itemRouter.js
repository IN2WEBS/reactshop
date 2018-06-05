const express = require('express');
const cachedItems = require('../data/items.json');
const fs = require('fs');

const itemRouter = express.Router();

const getItem = function (itemId) {
    return cachedItems.find(function (item) {
        return item.id === itemId || item.integerId === itemId;
    }) || {};
};

itemRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    const item = getItem(id);
    res.status(200).json(item);
});
itemRouter.post('/favorite', (req, res) => {
    const items = cachedItems.map((item) => {
        if (item.id === req.body.id) {
            return {...item, on_hold: !item.on_hold}
        } else {
            return item
        }
    });
    fs.writeFile('server/data/items.json', JSON.stringify(items), (err) => {
        if (err) return console.log(err);
    });
    res.send(req.body.id)
});

module.exports = itemRouter;
