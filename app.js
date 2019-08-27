var express = require('express');
var app = express();

app.get("/", function (req, res) {
    res.send('Hello World!');
});

app.get("/bye", function (req, res) {
    res.send('Goodbye!');
});

app.get("/dog", function (req, res) {
    res.send('MEOW!');
});

app.get("/r/:subredditName", function (req, res) {
    var subreddit = req.params.subredditName;
    res.send("Welcome to a " + subreddit.toUpperCase() + " SUBREDDIT");
});

app.get("/r/:subredditName/comments/:id/:title/", function (req, res) {
    console.log(req.params);
    res.send("Welcome to the comments Page");
})

app.get("*", function (req, res) {
    res.send('Page not found');
});

app.listen(3000, function () {
    console.log('server has started!')
});

