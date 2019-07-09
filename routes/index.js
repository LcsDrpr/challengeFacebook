var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/auth/facebook',
  passport.authenticate('facebook', { scope: 'email' })
);


router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { session: false }),


  function(req, res) {
    res.redirect("https://auth.expo.io..." 
      +"?userId="+req.user.id
      +"&firstName="+req.user.first_name 
      +"&lastName="+req.user.last_name
      +"&email="+req.user.email);
  }
);

module.exports = router;
