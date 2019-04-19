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