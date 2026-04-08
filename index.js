const express = require("express");
const app = express();
require('dotenv').config();
//json parser
app.use(express.json());

const PORT=process.env.PORT||3000;
//new commend
const PersonRoutes=require('./Routes/PersonRouter')
app.use('/person',PersonRoutes)

const MenuItemRouters=require('./Routes/MenuItemRouters')
app.use('/menuitem',MenuItemRouters)
//server running here
//server is running on port 3300


app.listen(PORT, () => {
  console.log("server is running on port 3300");
});
