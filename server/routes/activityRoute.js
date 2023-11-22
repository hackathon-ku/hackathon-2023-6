import express from 'express';
import {
  createActivity,
  getActivityBy,
  getActivityById,
  getUserActivity,
} from '../controllers/activityController.js';

const router = express.Router();

//POST
router.post('/', createActivity);

//GET BY FILTER
router.get('/', getActivityBy);

//GET BY ID
router.get('/:activity_id', getActivityById);

router.get('/user/:std_id', getUserActivity);

export default router;
