import dotenv from "dotenv";
dotenv.config();
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "./models/User.js"; // make sure to include .js

passport.serializeUser((user, done) => done(null, user.id));

// console.log("Google Client ID:", process.env.GOOGLE_CLIENT_ID);

passport.deserializeUser(async (id, done) => {
  try {
    const u = await User.findById(id);
    done(null, u);
  } catch (e) {
    done(e);
  }
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID || "GOOGLE_ID",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "GOOGLE_SECRET",
      callbackURL: process.env.GOOGLE_CALLBACK_URL || "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let u = await User.findOne({ googleId: profile.id });
        if (!u)
          u = await User.create({
            googleId: profile.id,
            displayName: profile.displayName,
            email:
              profile.emails && profile.emails[0] && profile.emails[0].value,
          });
        return done(null, u);
      } catch (e) {
        done(e);
      }
    }
  )
);

export default passport;

