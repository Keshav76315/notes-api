const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleWare");
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
router.post('/', authMiddleware, createNote)

//PATCH note
router.patch('/:id',authMiddleware, updateNote)

//DELETE note
router.delete('/:id',authMiddleware, deleteNote)


module.exports = router;