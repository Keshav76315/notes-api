const Admin = require("../models/admin");
const Note = require("../models/Note");
const Author = require("../models/Author");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.signup = async (req,res,next)=> {
    try {
        const {email,password} = req.body;

        if (!email || !password) {
            return res.status(400).json({error: "Email or password Missing"});
        }

        const existingAdmin = await Admin.findOne({email});

        if (existingAdmin) {
            return res.status(400).json({error: "Admin already exists"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const admin = await Admin.create({
            email,
            password: hashedPassword
        })

        res.status(201).json({message: "Admin created successfully"});
    }
    catch(err) {
        next(err);
    }
}

exports.login = async (req,res,next)=> {
    try {
        const {email, password} = req.body;

        if (!email || !password) {
            return res.status(400).json({error: "Email or password Missing"});
        }

        const admin = await Admin.findOne({email});

        if (!admin) {
            return res.status(400).json({error: "Invalid Credentials"});
        }

        const passMatch = await bcrypt.compare(password, admin.password);

        if (!passMatch) {
            return res.status(400).json({error: "Invalid Credentials"});
        }

        const adminToken = jwt.sign(
            {adminId: admin._id},
            "adminKey",
            {expiresIn: "1h"}
        )

        res.status(200).json(adminToken);
    }
    catch(err) {
        next(err);
    }
}

exports.deleteAllNotes = async (req,res,next)=> {
    try {
        const deleteNotes = Note.deleteMany({});

        res.status(200).json({deletedCount: deleteNotes.deletedCount});
    }
    catch(err) {
        next(err);
    }
}

exports.deleteAllAuthors = async (req,res,next)=> {
    try {
        const deleteAuthors = Author.deleteMany({});

        res.status(200).json({deletedCount: deleteAuthors.deletedCount});
    }
    catch(err) {
        next(err);
    }
}
