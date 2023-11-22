import express from 'express';
import {
  getUser,
  getUsers,
} from '../controllers/userController.js';

const router = express.Router();

//GET ALL
router.get('/', getUsers);

// //GET BY ID
router.get('/:std_id', getUser);

export default router;
