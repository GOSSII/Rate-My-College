
// Wep App - Black dot
// Description - BlackDot is to create surveys for the college and ask user to respond on in.

// Dipeshpuri Goswami - 300984229
// Sanket Vagadiya - 300991500
// Ishrat Vahora - 30098257
// Manthan Shah - 300990910

var express = require('express');
var router = express.Router();
let passport = require('passport');
const userController = require('../controllers/userController');


/* GET users listing. */
router
.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
  userController.getUserActions(req, res);
}).get('/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
  userController.getUserByIdActions(req, res);
}).put('/edit/:id', (req, res) => {
  userController.putEditProfileActions(req, res);
});

module.exports = router;

