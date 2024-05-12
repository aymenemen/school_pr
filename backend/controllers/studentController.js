import asyncHandler from 'express-async-handler';
import Student from '../models/studentModel.js';
import bcrypt from 'bcryptjs';
import generateToken from '../utils/generateToken.js';

//@desc Auth user & get token
//@route POST  /api/student/login
//@access Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const student = await Student.findOne({ email });

    if (student) {
        const { password: hashPassword } = student;
        const verified = bcrypt.compareSync(password, hashPassword);
        if (verified) {
            res.status(201).json({
                _id: student._id,
                name: student.name,
                email: student.email,
                phone: student.phone,
                address: student.address,
                avatar: student.avatar,
                token: generateToken(student._id)
            });
        } else {
            res.status(400);
            throw new Error('Incorrect password');
        }
    } else {
        res.status(404);
        throw new Error('Student not found');
    }
});

//@desc Register a new student
//@route POST  /api/student/register
//@access Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, phone, address, avatar } = req.body;

    const userExists = await Student.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('Student already exists');
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    const student = await Student.create({
        name,
        email,
        password: hashPassword,
        phone,
        address,
        avatar
    });

    if (student) {
        res.status(201).json({
            _id: student._id,
            name: student.name,
            email: student.email,
            phone: student.phone,
            address: student.address,
            avatar: student.avatar,
            token: generateToken(student._id)
        });
    } else {
        res.status(400);
        throw new Error('Invalid student data');
    }
});

export { authUser, registerUser };
