
// Wep App - Black dot
// Description - BlackDot is to create surveys for the college and ask user to respond on in.

// Dipeshpuri Goswami - 300984229
// Sanket Vagadiya - 300991500
// Ishrat Vahora - 30098257
// Manthan Shah - 300990910

let passport = require('passport');
let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index');
let tDoController = require('../controllers/toDo');

const userController = require('./users');

router.use('/users', userController);

/* GET home page. */
//  router.get('/', indexController.displayHomePage );

//  router.get('/about', indexController.displayAboutPage );

//  router.get('/projects', indexController.displayProjectPage );

//  router.get('/services', indexController.displayServicesPage );

//  router.get('/contact', indexController.displayContactPage);

/* GET ToDO page. */
//  router.get('/todo', tDoController.displayToDoList);


 /* GET ToDO page. */
//  router.get('/users', userController.getUserActions);


/* GET - displays the Login Page */
//  router.get('/login', indexController.displayLoginPage);

/* POST - processes the Login Page */
router.post('/login', indexController.processLoginPage);

/* GET - displays the User Registration Page */
//  router.get('/register', indexController.displayRegisterPage);

/* POST - processes the User Registration Page */
router.post('/register', indexController.processRegisterPage);

/* GET - perform user logout */
router.get('/logout', indexController.performLogout);


module.exports = router;
