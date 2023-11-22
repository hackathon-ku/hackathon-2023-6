import Activity from '../models/activityModel.js';
import userActivity from '../models/userActivity.js';

export const createActivity = async (req, res, next) => {
  try {
    const newActivity = new Activity(req.body);
    try {
      const savedActivity = await newActivity.save();
      res.status(200).json(savedActivity);
    } catch (error) {
      next(error);
    }
  } catch (error) {
    next(error);
  }
};

export const getActivityById = async (req, res, next) => {
  try {
    const activity = await Activity.findOne({
      activity_id: req.params.activity_id,
    });
    res.status(200).json(activity);
  } catch (error) {
    next(error);
  }
};

export const getActivityBy = async (req, res, next) => {
  try {
    const activities = await Activity.find(req.body);
    res.status(200).json(activities);
  } catch (error) {
    next(error);
  }
};

export const getUserActivity = async (req, res, next) => {
  try {
    const activity = await userActivity.findOne({
      std_id: req.params.std_id,
    });
    res.status(200).json(activity);
  } catch (error) {
    next(error);
  }
};
