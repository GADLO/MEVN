const express = require('express');
const webControl = require('../controllers/webControl');
const router = express.Router();

// this is our get method
// this method fetches all available data in our database
router.get('/getData', webControl.getArticles);

router.get('/:id', webControl.getSingleArticle);

// this is our create methid
// this method adds new data in our database
router.post('/', webControl.createArticle);

// this is our update method
// this method overwrites existing data in our database
router.patch('/:id', webControl.updateArticle);

// this is our delete method
// this method removes existing data in our database
router.delete('/:id', webControl.deleteArticle);

module.exports = router;
