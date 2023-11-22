import express from 'express';
import { getRequired } from '../controllers/courseController.js';

const router = express.Router();

router.get('/:course_id', getRequired);

export default router;
