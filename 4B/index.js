const http = require('http');
const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const route = require("./route/route");
const session = require('express-session');
const { MemoryStore } = require('express-session');
const exphbs = require("express-handlebars");

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

hbs.registerPartials(__dirname + "/views/partials");

app.use(
    session({
        secret: "Session",
        store: new MemoryStore(),
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 1000 * 60 * 60 * 3 }
    })
);
app.use(function (request, response, next) {
    response.locals.message = request.session.message;
    delete request.session.message;
    next();
});

app.use(route);

const port = 3000;
const server = http.createServer(app);
server.listen(port);
console.debug(`Server listening on port ${port}`);
