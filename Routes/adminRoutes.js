const express = require('express');
const router = express.Router();

const {signup, login, deleteAllNotes, deleteAllAuthors} = require('../controllers/adminController');
const adminMiddleware = require('../middleware/adminMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

router.delete('/notes', authMiddleware, adminMiddleware,deleteAllNotes);
router.delete('/authors', authMiddleware, adminMiddleware,deleteAllAuthors);

module.exports = router;