const express = require('express');
const app = express();
const mongoose = require('mongoose');

var databaseUrl = 'mongodb://localhost:27017/AdminSignIn'

mongoose.connect(databaseUrl,{
    useNewUrlParser: true,
	useUnifiedTopology: true
}).then(()=>{
    console.log("Successfully connected to database");
}).catch(err => {
    console.log("Could not connect to database exiting now..",err);
    process.exit();
})

const PORT = 4200 || process.env.PORT;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));