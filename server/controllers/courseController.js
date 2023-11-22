import Course from '../models/courseModel.js';

export const getRequired = async (req, res, next) => {
  try {
    const course = await Course.findOne({ course_id: req.params.course_id });
    res.status(200).json(course);
  } catch (error) {
    next(error);
  }
};
