const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Food = require("./models/person");

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await Food.findOne({ username });

      if (!user) {
        return done(null, false);
      }

      const isMatch = await user.comparePassword(password);

      if (!isMatch) {
        return done(null, false);
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

module.exports = passport;