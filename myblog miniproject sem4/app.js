const express=require('express');
const morgan=require("morgan");
const res = require('express/lib/response');
const mongoose=require('mongoose');
const Blog=require('./models/blog');

//connect to mongodb
const dbURI=`mongodb+srv://user2:revision1234@cluster0.hrfvn.mongodb.net/blogdatabase?retryWrites=true&w=majority`;
mongoose.connect(dbURI)
    .then((result)=> {
        app.listen(3000)
        console.log("connected to db")
    })
    .catch((err)=>console.log(err));

//express app
const app=express();

//register view engine
app.set('view engine','ejs')
    


//middleware and static files
app.use(morgan("dev"));
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));




//routes
app.get('/',(req,res)=>{
    res.render("welcome",{title:"Welcome Page"});
});

app.get('/blogs',(req,res)=>{
    Blog.find().sort({createdAt:-1})
        .then((result)=>{
            res.render('home',{title:"All Blogs" , blogs:result})
        }).catch((err)=>console.log(err))
})


app.post('/blogs',(req,res)=>{
    const blog=new Blog(req.body);

    blog.save()
        .then((result)=>{
            res.redirect("/blogs");
        })
        .catch((err)=>{
            console.log(err);
        })
})
app.get('/blogs/create',(req,res)=>{
    res.render('create',{title:'Create a new Blog'})
})

app.get('/blogs/updates',(req,res)=>{
    Blog.find({Category:"Updates"}).sort({createdAt:-1})
        .then((result)=>{
            res.render('home',{title:"Updates" , blogs:result})
        }).catch((err)=>console.log(err))
})
app.get('/blogs/environment',(req,res)=>{
    Blog.find({Category:"Environment"}).sort({createdAt:-1})
        .then((result)=>{
            res.render('home',{title:"Environment" , blogs:result})
        }).catch((err)=>console.log(err))
})
app.get('/blogs/technology',(req,res)=>{
    Blog.find({Category:"Technology"}).sort({createdAt:-1})
        .then((result)=>{
            res.render('home',{title:"Technology" , blogs:result})
        }).catch((err)=>console.log(err))
})
app.get('/blogs/design',(req,res)=>{
    Blog.find({Category:"Design"}).sort({createdAt:-1})
        .then((result)=>{
            res.render('home',{title:"Design" , blogs:result})
        }).catch((err)=>console.log(err))
})
app.get('/blogs/culture',(req,res)=>{
    Blog.find({Category:"Culture"}).sort({createdAt:-1})
        .then((result)=>{
            res.render('home',{title:"Culture" , blogs:result})
        }).catch((err)=>console.log(err))
})
app.get('/blogs/business',(req,res)=>{
    Blog.find({Category:"Business"}).sort({createdAt:-1})
        .then((result)=>{
            res.render('home',{title:"Business" , blogs:result})
        }).catch((err)=>console.log(err))
})
app.get('/blogs/politics',(req,res)=>{
    Blog.find({Category:"Politics"}).sort({createdAt:-1})
        .then((result)=>{
            res.render('home',{title:"Politics" , blogs:result})
        }).catch((err)=>console.log(err))
})
app.get('/blogs/opinion',(req,res)=>{
    Blog.find({Category:"Opinion"}).sort({createdAt:-1})
        .then((result)=>{
            res.render('home',{title:"Opinion" , blogs:result})
        }).catch((err)=>console.log(err))
})
app.get('/blogs/science',(req,res)=>{
    Blog.find({Category:"Science"}).sort({createdAt:-1})
        .then((result)=>{
            res.render('home',{title:"Science" , blogs:result})
        }).catch((err)=>console.log(err))
})
app.get('/blogs/health',(req,res)=>{
    Blog.find({Category:"Health"}).sort({createdAt:-1})
        .then((result)=>{
            res.render('home',{title:"Health" , blogs:result})
        }).catch((err)=>console.log(err))
})
app.get('/blogs/style',(req,res)=>{
    Blog.find({Category:"Style"}).sort({createdAt:-1})
        .then((result)=>{
            res.render('home',{title:"Style" , blogs:result})
        }).catch((err)=>console.log(err))
})
app.get('/blogs/travel',(req,res)=>{
    Blog.find({Category:"Travel"}).sort({createdAt:-1})
        .then((result)=>{
            res.render('home',{title:"Travel" , blogs:result})
        }).catch((err)=>console.log(err))
})

app.get('/blogs/:id',(req,res)=>{
    const id=req.params.id;
    Blog.findById(id)
        .then(result=>{
            res.render('details',{blog:result ,title:"Blog Details"})
        }).catch(err=>console.log(err))
})

app.delete('/blogs/:id',(req,res)=>{
    const id=req.params.id;
    Blog.findByIdAndDelete(id)
        .then(result=>{
            res.json({redirect:"/blogs"})
        }).catch(err=>console.log(err))
})


