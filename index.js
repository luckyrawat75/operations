const express = require("express");
const app = express();

//json parser
app.use(express.json());



const PersonRoutes=require('./Routes/PersonRouter')
app.use('/person',PersonRoutes)

const MenuItemRouters=require('./Routes/MenuItemRouters')
app.use('/menuitem',MenuItemRouters)
//server running here
app.listen(3300, () => {
  console.log("server is running on port 3300");
});
