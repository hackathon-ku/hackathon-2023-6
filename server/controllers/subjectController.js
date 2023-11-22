import Subject from '../models/subjectModel.js';
import userSubjectRegistered from '../models/userSubjectRegisteredModel.js';

export const getSubjectId = async (req, res, next) => {
  try {
    const subject = await Subject.findOne({
      subject_id: req.params.subject_id,
    });
    res.status(200).json(subject);
  } catch (error) {
    next(error);
  }
};

export const getSubjectBy = async (req, res, next) => {
  try {
    const subjects = await Subject.find(req.body);
    res.status(200).json(subjects);
  } catch (error) {
    next(error);
  }
};

export const getUserSubjectRegistered = async (req, res, next) => {
  try {
    const UserSubjectRegistered = await userSubjectRegistered.findOne({
      std_id: req.params.std_id,
    });
    res.status(200).json(UserSubjectRegistered);
  } catch (error) {
    next(error);
  }
};
