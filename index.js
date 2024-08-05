var express = require('express');
var router = express.Router();
const userModel = ("./users.js")

/* GET home page. */
router.get('/', function(req, res) {
  req.session.ban == true;
  res.render("index");
});

router.get("/read" ,function(req,res){
  if(res.session.ban == true){
    console.log("You are banned ");
  }else{
    console.log("you are not banned");
  }
})

router.get("/cookiecreate" ,function(req,res){
  res.cookie("Age" , 25);
  res.send()
})

router.get("/cookieread" ,function(req,res){
  console.log(req.cookies.age);
  res.send("Read the cookies");
})

router.get("/delete",function(req,res){
  res.clearCookie("age");
  res.send("clear hogya cookie");
})
//router.get("/create" , async function(req,res) {
//  const addusers = await userModel.create({
//    username: "yahiya",
//    name:"Yahiya Akram",
//    age: 25
//  });
//  res.send(addusers);
//})



module.exports = router;
