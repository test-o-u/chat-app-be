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
    const qUser = User.findOne({userName:user.userName});

    if(!qUser) return res.send({statusCode:400,message:"Sai tài khoản hoặc mật khẩu"})
    if(qUser.password == user.password)
    return res.send(user);


  //  await  user.save();

  } catch (error) {
    console.log(error);
    return res.send("err");

  }
  
});
/* Get Logout  page */


module.exports = router;
