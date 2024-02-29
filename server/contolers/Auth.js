import User from '../model/Register.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken'

const Register = async (req, res, next) => {

    const { name, email, password } = req.body;
    const hasedPassword = bcryptjs.hashSync(password, 10)
    const newUser = new User({ name, email, password: hasedPassword });
    try {
        await newUser.save()
        res.status(201).json({
            message: 'User created succesfully'
        })
    } catch (error) {
        next(error);
    }

}

const Login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({ email })
        if (!validUser) {
            return next(errorHandler(404, 'User not found'))
        }
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) {
            return next(errorHandler(401, 'Something wrong in email or password'));
        }
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const { password: hasedPassword, ...rest } = validUser._doc;
        res
            .cookie('access_token', token, { httpOnly: true, maxAge:3600000})
            .status(200)
            .json(rest);
    } catch (error) {
        next(error)
    }
}

export { Register, Login }; 