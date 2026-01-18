const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const validateNote = require("../middleware/validateNotes");
const {
    getAllNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote
} = require('../controllers/noteController');

//General GET
router.get('/', getAllNotes)

//GET using id
router.get('/:id', getNoteById)

//POST new note
router.post('/', authMiddleware, validateNote, createNote)

//PATCH note
router.patch('/:id',authMiddleware, updateNote)

//DELETE note
router.delete('/:id',authMiddleware, deleteNote)


module.exports = router;