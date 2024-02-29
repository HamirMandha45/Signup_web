import express from 'express'
import { Register,Login } from '../contolers/Auth.js';

const router = express.Router();


router.post('/sign-up',Register);
router.post('/sign-in',Login);

export {router}