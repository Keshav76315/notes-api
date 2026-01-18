const validateNote = async (req,res,next)=> {
    if (!title || !content) {
        res.status(400).json({error: "Please provide both title and content"});
    }

    if (title.length > 100) {
        res.status(400).json({error: "Title is too long"});
    }

    if (content.length > 5000) {
        res.status(400).json({error: "Content length is too long"});
    }
}

module.exports = validateNote;