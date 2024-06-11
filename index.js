const express = require('express');
const app=express();
app.get('/',(req, res)=>{
    res.send('hello from home page')
})

app.get('/about',(req, res)=>{
    res.send('hello from about page')
})
app.listen(3000,()=>console.log("your server started successfully")) 