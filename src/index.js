const express = require("express");
const dotenv = require("dotenv").config();
const dbConnect = require("./config/dbConnect.js");
const authRoutes = require("./routes/authRoutes.js")
const userRoutes = require("./routes/userRoutes.js")
dbConnect();

const app = express();

//middleware
app.use(express.json());

//routes
app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes);

//start the server
const PORT = process.env.PORT || 7002;
app.listen(PORT ,() => {
    console.log(`Server is running at port ${PORT}`);
})

