const express = require('express');
const app = new express();
const path = require('path');
const home = require('./controlles/home');
const login = require('./controlles/login');
const create = require('./controlles/create');
const newPost = require('./controlles/newPost');
const posts = require('./controlles/getPosts');
const newUser = require('./controlles/newUser');
const userRegistro = require('./controlles/userRegistro');
const userLogin = require('./controlles/userLogin');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressSession = require('express-session');
const authMiddleware = require('./controlles/authMiddleware');
const redirect = require('./controlles/redirectMid');
const logout = require('./controlles/logout');

mongoose.connect(
  'mongodb+srv://luizherbetsouza:MNJsMELoh2CsbRWE@cluster0.228e2ml.mongodb.net/',
  { useNewUrlParser: true }
);

const ejs = require('ejs');

app.use(expressSession({ secret: 'quimafi' }));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

global.loggedIn = null;

app.use('*', (req, res, next) => {
  loggedIn = req.session.userId;
  next();
});

app.listen(3000, () => {
  console.log('App rodando na porta 3000');
});

app.get('/', home);
app.get('/login', redirect, login);
app.get('/posts/:id', posts);
app.get('/post/new', authMiddleware, newPost);
app.get('/user/new', redirect, newUser);
app.get('/logout', logout);

app.post('/user/login', redirect, userLogin);
app.post('/user/registro', redirect, userRegistro);
app.post('/post/store', create);
