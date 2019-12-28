express=require("express");
app=express();
fs=require("fs");
mymodule=require("./mymodule");
bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:false}));

app.get("/",function(req,resp){
    resp.sendFile("form.html",{root:__dirname});
    console.log("file send to response");
});

app.get("/anna",function(req,resp){
    resp.send("happy new year anna");
});

app.get("/amitguddu",function(req,resp){
    resp.send("happy new year amit ani guddi");
});

app.get("/mama",function(req,resp){
    resp.send("happy new year mama");
});

app.get("/aau",function(req,resp){
    resp.send("happy new year aau");
});

app.get("/aaipappa",function(req,resp){
    resp.send("happy new year aai ani pappa");
});

app.get("/atya",function(req,resp){
    resp.send("happy new year atya");
});

app.post("/calculate",function(req,resp){
    result=mymodule.addition(req.body.num1,req.body.num2);
     resp.send("Addition: "+result);
	 console.log("o/p is send to  response");
});
app.listen(3000,function(){
	console.log("server started on port 3000");
})
