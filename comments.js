// Create web server
// To test: http://localhost:3000/comments
// To test: http://localhost:3000/comments/1
// To test: http://localhost:3000/comments/2
// To test: http://localhost:3000/comments/3
// To test: http://localhost:3000/comments/4
// To test: http://localhost:3000/comments/5
// To test: http://localhost:3000/comments/6
// To test: http://localhost:3000/comments/7
// To test: http://localhost:3000/comments/8
// To test: http://localhost:3000/comments/9
// To test: http://localhost:3000/comments/10

var express = require('express');
var app = express();

var comments = [
    { name: 'Leonardo', comment: 'A comment.' },
    { name: 'Raphael', comment: 'Another comment.' },
    { name: 'Donatello', comment: 'Yet another comment.' },
    { name: 'Michelangelo', comment: 'And another comment.' },
    { name: 'Splinter', comment: 'Yet another comment.' },
    { name: 'April', comment: 'And another comment.' },
    { name: 'Shredder', comment: 'Yet another comment.' },
    { name: 'Bebop', comment: 'And another comment.' },
    { name: 'Rocksteady', comment: 'Yet another comment.' },
    { name: 'Krang', comment: 'And another comment.' }
];

app.get('/comments', function(req, res) {
    res.json(comments);
});

app.get('/comments/:id', function(req, res) {
    var id = req.params.id - 1;
    if (comments[id]) {
        res.json(comments[id]);
    } else {
        res.status(404).json({ error: 'Comment not found.' });
    }
});

app.listen(3000, function() {
    console.log('Web server started at http://localhost:3000');
});