
// Wep App - Black dot
// Description - BlackDot is to create surveys for the college and ask user to respond on in.

// Dipeshpuri Goswami - 300984229
// Sanket Vagadiya - 300991500
// Ishrat Vahora - 30098257
// Manthan Shah - 300990910

let express = require("express");
let router = express.Router();
let ProjectController = require('../controllers/projects');
/* GET home page. */

router.get("/jbplatedepo", ProjectController.displayProjectJBPlateDepo);

router.get("/mightycause", ProjectController.displayProjectMightyCause);

module.exports = router;
