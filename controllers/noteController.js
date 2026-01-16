const Note = require("../models/Note");

exports.getAllNotes = async (req,res,next)=> {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  }
  catch(err) {
    next(err);
  }
}

exports.getNoteById = async (req,res,next)=> {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({error: "Note not found"});
    }

    res.status(200).json({note});
  }
  catch(err) {
    next(err);
  }
}

exports.createNote = async (req,res,next)=> {
  try {
    const {title, content} = req.body;

    if (!title || !content) {
      return res.status(400).json({
        error: "Title or Content missing"
      });
    }

    const newNote = new Note({
      title,
      content,
      author: req.user.authorId
    });

    const savedNote = await newNote.save()

    res.status(201).json({"Note created": savedNote});
  }
  catch(err) {
    next(err);
  }

}

exports.updateNote = async (req,res,next)=> {
  try {
    const updatedNote = await Note.findById(req.params.id);

    if (!updatedNote) {
      return res.status(404).json({error: "Note not found"})
    }

    if (updatedNote.author.toString() !== req.user.authorId) {
      return res.status(403).json({error: "Not Authorized"})
    }

    updatedNote.title = req.body.title ?? updatedNote.title;
    updatedNote.content = req.body.content ?? updatedNote.content;

    await updatedNote.save();

    res.status(200).json(updatedNote);
  }
  catch(err) {
    next(err);
  }
}

exports.deleteNote = async (req,res,next)=> {
  try {
    const removedNote = await Note.findById(req.params.id);

    if (!removedNote) {
      return res.status(404).json({error: "Note not found"});
    }

    if (removedNote.author.toString() !== req.user.authorId) {
      return res.status(403).json({error: "Not Authorized"});
    }

    await removedNote.deleteOne();

    res.status(200).json({messsage: "Note deleted Successfully"});
  }
  catch(err) {
    next(err);
  }
}

