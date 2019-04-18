let express = require('express');
let router = express.Router();
let passport = require('passport');
let surveyController = require('../controllers/takenSurvey');


router
.get('/', (req, res) => {
    surveyController.getActiveSurvey(req, res);
  })


module.exports = router;