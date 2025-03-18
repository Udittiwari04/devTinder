const express = require('express');
const app = express();



app.use('/hello',(req,res)=>{
    res.send("welcome to express");
});
app.use("/hello2",(req,res)=>{
    res.send("welcome to express hello2 route to check the sequence concept of the  use method");
});
//it will give the concept or content as route hello becaoise it follow the route /hello
app.use("/hello/2",(req,res)=>{
    res.send("welcome to express hello3 route to check the sequence concept of the  use method");
});
app.get('/',(req,res)=>{
    res.send("welcome to express");
   
});
app.get("/about",(req,res)=>{
    res.send("welcome to about page");
});

app.get("/contact",(req,res)=>{
    res.send("welcome to contact page");
});

app.post("/user",(req,res)=>{
    // logic of database
    res.send("user created successfully");
})

// app.get("/user",(req,res)=>{
//     res.send("welcome to user page");
// });

app.patch("/user",(req,res)=>{
    // logic og database
    res.send("user updated successfully");
})

app.delete("/user",(req,res)=>{
    // logic og database
    res.send("user deleted successfully");
})
app.get("/user/:id",(req,res)=>{
    // logic og database
    res.send("user id is "+req.params.id);
})

app.get("/ab?c",(req,res)=>{
    res.send("welcome to dynnamic routing concept");
}
);
app.use("/ab?c",(req,res)=>{
    res.send("welcome to dynnamic routing concept using use method");
}
);
app.get("/ab+c",(req,res)=>{
    res.send("welcome to dynnamic routing concept");
}
);
app.use("/ab+c",(req,res)=>{
    res.send("welcome to dynnamic routing + concept using use method");
}
);
//concept of regex if theire route contain the regex path then the route will be executed
app.get(/ad/,(req,res)=>{
    res.send("welcome to regex routing concept");
});
//regex concept with start and end
app.get(/a*fly$/,(req,res)=>{
    res.send("welcome to regex routing concept with start with any a and end with fly");
});
app.get("/ab*c",(req,res)=>{
    res.send("welcome to dynnamic routing * concept");
}
);

// app.get("/user",(req,res)=>{
//     console.log(req.query);
//     res.send("welcome to user page with query string in the route");
// });
app.get("/user/:id",(req,res)=>{
    console.log(req.params);
    res.send("welcome to user page with query string in the route a");
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });

