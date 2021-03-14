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
   await  user.save();
  return res.send(user);

  } catch (error) {
    console.log(error);
    return res.send("err");

  }
  
});
/* Get Logout  page */


module.exports = router;
