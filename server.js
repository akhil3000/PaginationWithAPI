const express=require('express');
const app=express();
const port=3000

const users=[
{id:1,name:'User1'},
{id:2,name:'User2'},
{id:3,name:'User3'},
{id:4,name:'User4'},
{id:5,name:'User5'},
{id:6,name:'User6'},
{id:7,name:'User7'},
{id:8,name:'User8'},
{id:9,name:'User9'},
{id:10,name:'User10'},
{id:11,name:'User11'},
{id:12,name:'User12'},
{id:13,name:'User13'}




]


app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.get('/users',(req,res)=>{
    const page=req.query.page
    const limit=req.query.limit

    const startIndex=(page-1)*limit
    const endIndex=page*limit

    const results={}


    const resultUsers=users.slice(startIndex,endIndex)

    res.json(resultUsers);

})

app.listen(port,()=>{
    console.log("Server is listening to the port 3000");
})
