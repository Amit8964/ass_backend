const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./router");
const port = process.env.PORT || 4000;



app.use(cors({
    "Access-Control-Allow-Origin": "*"
}));
app.use(express.json());
app.use("/", router);


mongoose.connect(`mongodb+srv://${encodeURIComponent('Amit8964')}:${encodeURIComponent('Cypher@8964')}@${'cluster0.adtotkd'}.mongodb.net/${'File'}?retryWrites=true&w=majority`).then(data=>{

console.log("Data connected")

}).catch((err)=>{

    console.log(err)
})


app.listen(port, () => {
    console.log("server is listening on port 4000");

})


