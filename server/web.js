const express = require('express');
const path = require('path');
const hbs =require('hbs');
const lyrics_get = require('../src/lyrics.js')

const statics = path.join(__dirname, '/statics');
const viewPath = path.join(__dirname, '/views');
const partials = path.join(__dirname, '/partials');

hbs.registerPartials(partials);

app=express();

app.set('view engine','hbs');
app.set('views',viewPath);

app.use(express.static(statics));


app.get('',(req,res)=>{
    res.render('index',{
        name:"Mayur Raj",
    });
});

app.get('/lyrics',(req,res)=>{
    if(!req.query.song || !req.query.artist){
        return res.send({
            error: 'Please provide song name or artist name',
        })
    }
    lyrics_get(req.query.song, req.query.artist,(error,data)=>{
        if(error){
            return res.send({error})
            }
            res.send({
               Song_name: req.query.song,
               Artist: req.query.artist,
               lyrics: data,
            })
    })
    });
app.get('/about',(req,res)=>{
    res.render('about',{
        name:"Mayur Raj",
    });
});
app.get('/help',(req,res)=>{
    res.render('help',{
        name:"Mayur Raj",
    });
});
app.get('/help/*',(req,res)=>{
    res.render('404',{
        name:"Mayur Raj",
        error:'Help Article not found!',
    });
});
app.get('/about/*',(req,res)=>{
    res.render('404',{
        name:"Mayur Raj",
        error:'About article not found!',
    });
});

app.get('*',(req,res)=>{
    res.render('404',{
        name:"Mayur Raj",
        error:'Page not found',
    });
});

app.listen(3000,()=>{
    console.log('Your server is up on port 3000!');
})