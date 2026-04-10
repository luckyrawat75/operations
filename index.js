const express = require("express");
const app = express();
const Food = require("./models/person");
require("dotenv").config();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

app.use(express.json());
app.use(passport.initialize());
const PORT = process.env.PORT || 3300;

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await Food.findOne({ username });

      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }

      const isMatch = user.password === password;

      if (isMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Incorrect password" });
      }
    } catch (error) {
      return done(error);
    }
  }),
);

// ✅ Routes

const localauth = passport.authenticate("local", { session: false });
app.get("/", localauth, (req, res) => {
  res.send("welcome to our hotel");
});

const PersonRoutes = require("./Routes/PersonRouter");
app.use("/person", localauth, PersonRoutes);

const MenuItemRouters = require("./Routes/MenuItemRouters");

app.use("/menuitem", localauth, MenuItemRouters);

// ✅ Server
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
