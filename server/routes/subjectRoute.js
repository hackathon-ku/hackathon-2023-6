import express from 'express';
import {
  getSubjectBy,
  getSubjectId,
  getUserSubjectRegistered,
} from '../controllers/subjectController.js';

const router = express.Router();

//GET BY FILTER
router.get('/', getSubjectBy);

//GET BY ID
router.get('/:subject_id', getSubjectId);

router.get('/user/:std_id', getUserSubjectRegistered);

export default router;
