
// Wep App - Black dot
// Description - BlackDot is to create surveys for the college and ask user to respond on in.

// Dipeshpuri Goswami - 300984229
// Sanket Vagadiya - 300991500
// Ishrat Vahora - 30098257
// Manthan Shah - 300990910

let express = require('express');
let router = express.Router();
let passport = require('passport');
let surveyController = require('../controllers/takenSurvey');


router
.get('/', (req, res) => {
    surveyController.getActiveSurvey(req, res);
  }).get('/:id', (req, res) => {
    surveyController.getActiveSurveyById(req, res);
  }).post('/add/:id', (req, res) => {
    surveyController.postSurveyResponse(req, res);
  }).get('/report/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
    surveyController.getReportById(req, res);
  });


module.exports = router;