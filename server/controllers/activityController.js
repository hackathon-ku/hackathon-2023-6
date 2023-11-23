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
    let { searchText, filter } = req.body;
    if (!filter) {
      filter = {};
    }

    const activities = await Activity.find({
      $and: [
        {
          $or: [
            { activity_id: { $regex: searchText } },
            { activity_name: { $regex: searchText } },
          ],
        },
        { ...filter },
      ],
    });

    res.status(200).json(activities);
  } catch (error) {
    next(error);
  }
};

export const deleteActivity = async (req, res, next) => {
  try {
    const activity = await Activity.findOne({
      activity_id: req.params.activity_id,
    });
    if (activity && activity.std_id === req.payload.std_id) {
      await activity.deleteOne();
      res.status(200).json({ message: 'Delete Successfully' });
    } else {
      res.status(401).json({ message: 'Something Error' });
    }
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
