var express = require('express');
var router = express.Router();

router.get('/',(req,res,next)=>{
    res.render("projects/index", {title: "Midterm 2024"})
});

module.exports