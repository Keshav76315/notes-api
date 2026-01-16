const Author = require("../models/Author");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.signup = async (req,res,next) => {
  try {
    const {email,password} = req.body;

    if (!email || !password) {
      return res.status(400).json({error: "Email or password missing"});
    }

    const existingAuthor = await Author.findOne({email});

    if (existingAuthor) {
      return res.status(400).json({error: "Author already exists"})
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const author = await Author.create({
      email,
      password: hashedPassword
    })

    res.status(201).json({message: "Author created successfully"});
  }
  catch(err) {
    next(err);
  }
}

exports.login = async (req,res,next) => {
  try {
    const {email,password} = req.body;

    if (!email || !password) {
      return res.status(400).json({error: "Email or password missing"});
    }

    const author = await Author.findOne({email});

    if (!author) {
      return res.status(400).json({error: "Invalid Credentials"});
    }

    const passMatch = await bcrypt.compare(password,author.password);

    if (!passMatch) {
      return res.status(400).json({error: "Invalid Credentials"});
    }

    const token = jwt.sign(
      {authorId: author._id, role: author.role},
      process.env.JWT_SECRET,
      {expiresIn: "1h"}
    )

    res.status(200).json(token);
  }
  catch(err) {
    next(err);
  }
}
