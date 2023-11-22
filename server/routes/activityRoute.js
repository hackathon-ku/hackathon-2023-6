import express from 'express';
import {
  createActivity,
  deleteActivity,
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

router.delete('/:activity_id', deleteActivity);

router.get('/user/:std_id', getUserActivity);

export default router;
