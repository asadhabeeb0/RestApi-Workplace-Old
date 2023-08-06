const mongoose = require ("mongoose");
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/studentsapi")
.then(()=> {
    console.log("Connection is successful");
}).catch((error) => {
    console.log(error);
});
