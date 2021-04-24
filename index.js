import Express from "express";

const app = Express();
const port = 9000;
app.use(Express.json())

// some sort of data structure to hold input strings with keys
var myStructure = {};

// TODO Listen at 9000
// TODO POST request at /input
app.post("/input", (req,res) =>{

    for (const [_, value] of Object.entries(req.body)) {
       if (value in myStructure){
           myStructure[value] += 1;
       }else{
           myStructure[value] = 1;
       }
    }
    res.send("Input received!");
    
});
// TODO GET request at /<query>
app.get("/", (req,res) => {
    if(req.query)
    res.send(myStructure);
});


app.listen(port, ()=>{
    console.log("Server started on port " + port);
})