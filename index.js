const express = require("express");
const app = express();

require("dotenv").config();
const passport = require("./auth");

app.use(express.json());
app.use(passport.initialize());
const PORT = process.env.PORT || 3300;

// ✅ Routes

const localauth = passport.authenticate("local", { session: false });
app.get("/", (req, res) => {
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
