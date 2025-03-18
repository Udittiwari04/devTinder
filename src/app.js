const express = require('express');
const app = express();


app.get('/',(req,res)=>{
   res.get('welcome to devtender');
});

app.get("/about",(req,res)=>{
    res.get("welcome to about page");
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });

