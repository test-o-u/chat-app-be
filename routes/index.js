var express = require('express');
var router = express.Router();
const User = require('../model/User');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Get Sign in page */
router.post('/login',  async   (req, res, next) =>  {
const user = new User(req.query);

  try {
    const qUser = await User.findOne({userName:user.userName});

    if(!qUser) return res.send({statusCode:400,error:"Sai tài khoản hoặc mật khẩu",data:null})
    if(qUser.password == user.password)
    return  res.send({statusCode:200,data:user,error:null});
    else 
    return res.send({statusCode:400,error:"Sai tài khoản hoặc mật khẩu",data:null})


  //  await  user.save();

  } catch (error) {
    console.log(error);
    return res.send("err");

  }
  
});

/* Get Sign in page */
router.post('/signup',  async   (req, res, next) =>  {
  const user = new User(req.query);
  
    try {
      const qUser = await User.findOne({userName:user.userName});
  
      if(qUser) return res.send({statusCode:400,error:"Người dùng đã tồn tại",data:null})
      else 

  
     await  user.save();
     return  res.send({statusCode:200,data:user,error:null});

  
    } catch (error) {
      console.log(error);
      return res.send("err");
  
    }
    
  });
/* Get Logout  page */


module.exports = router;
