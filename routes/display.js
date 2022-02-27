const express = require('express');

const displayController = require('../controllers/display');

const router = express.Router();

// GET /feed/posts
router.get('/professional', displayController.getPosts);



module.exports = router;