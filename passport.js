var passport = require('passport')
  , OAuthStrategy = require('passport-oauth').OAuthStrategy;
   PCOAuthStrategy = require('passport-oauth').OAuthStrategy;

passport.serializeUser(function(user, done) {
done(null, user);
});
passport.deserializeUser(function(user, done) {
done(null, user);
});


/**
 * PraiseCharts OAuth tokens
 */

passport.use('pc-oauth',new PCOAuthStrategy({
    requestTokenURL: 'https://www.praisecharts.com/api/oauth/request_token',
    accessTokenURL: 'https://www.praisecharts.com/api/oauth/access_token',
    userAuthorizationURL: 'https://www.praisecharts.com/api/oauth/authorize',
    consumerKey: 'api_test2',
    consumerSecret: 'secret',
    callbackURL: "http://localhost:8000/auth/example/callback"
  },
  function(token, tokenSecret, profile, done) {
    console.log({token, tokenSecret});
    return done(null, profile);
  }
));
