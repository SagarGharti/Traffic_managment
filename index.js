const express = require('express')

const app = express();

app.get('/a',(req,res)=>{
    res.set({
        "Content-Type":"text/plain",
    });
    return res.send({message: "hello"});
});

app.get('/b',(req,res)=>{
   return res.send("you cannot acess it..");
});

app.get('/c',(req,res)=>{
    return res.send(
        "you are too late for party  "
    );
    
});
app.get('/d',(req,res)=>{
    return res.status(200).send("change the status code");
});

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log('server is started')
})