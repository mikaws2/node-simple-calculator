const express = require("express");

const app = express();


app.use(express.urlencoded({
    extended: false
  }));
  

app.get("/", function(request, response) {

    console.log(request);

    response.sendFile(__dirname + "/calcultor.html");
    
});

app.post("/", function(request, response) {

    var type = request.body.mytype;
    var num1 = Number(request.body.num1);
    var num2 = Number(request.body.num2);

    if (type == "add"){
        var result = num1 + num2;
    }else if(type == "multiply"){
        var result = num1 * num2;
    }else if (type == "subtract"){
        var result = num1 - num2;
    }
    
    response.send("The result of the calculation is " + result);
});


app.get("/test", function(request, response) {

    console.log(request);
    response.send("test page");
}); 

app.listen(3000, function(){
    
    console.log("server is running on port 3000.");

});

