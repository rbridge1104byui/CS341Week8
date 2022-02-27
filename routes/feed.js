const express = require('express');

const feedController = ('../controllers/feed')

const router = express.Router();
// GET /feed/posts
router.get('/posts', feedController.getPosts);

module.exports = router;
