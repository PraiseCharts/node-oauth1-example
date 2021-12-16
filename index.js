const express = require('express')
const app = express()
const cookieSession = require('cookie-session')
const OAuth = require('Oauth')


const passport = require('passport');
const { doesNotMatch } = require('assert');
require('./passport')

app.use(cookieSession({
    name: 'praisecharts-auth-session',
    keys: ['key1', 'key2']
  }))

app.use(passport.initialize());
app.use(passport.session());

app.get('/',(req,res)=>{
    res.send(`<h1>OAuth Testing</h1> </br></br> <a href="/auth/pc-example">Connect PraiseCharts Account with OAuth 1.0a</a>`)
});

// app.get('/auth/twitter-example',
// passport.authenticate('oauth'));

app.get('/auth/pc-example',
passport.authenticate('pc-oauth'));

app.get('/auth/example/callback', 
passport.authenticate('pc-oauth', { failureRedirect: '/auth/error' }),
  function(req, res) {
  // Successful authentication, redirect home.
  res.redirect('/');
});


app.get('/auth/error', (req, res) => res.send('Unknown Error'))


app.listen(8000,()=>{
  console.log('Serve is up and running at the port 8000')
})