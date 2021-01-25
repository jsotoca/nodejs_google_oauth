const passport = require('passport');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '../configuration/enviroment';

passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:4000/auth/google/callback",
    passReqToCallback   : true
  },
  function(request:any, accessToken:string, refreshToken:string, profile:any, done:any) {
      return done(null,profile);
  }
));

passport.serializeUser(function(user:any, done:any) {
  done(null, user);
});

passport.deserializeUser(function(user:any, done:Function) {
  done(null, user);
});