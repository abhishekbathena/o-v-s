const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
const bodyParser = require('body-parser');
const cookieparser = require('cookie-parser');
const db = require("./models");

// Routers
app.use(cookieparser());
app.use(bodyParser.urlencoded({ extended: true }));
const usersRouter = require("./routes/Users");
app.use("/reg", usersRouter);




db.sequelize.sync().then(() => {

    app.listen(8000, () => {
        console.log("Server running on port 8000");
    });
});