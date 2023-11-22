import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';

export const getUser = async (req, res, next) => {
  try {
    // const salt = bcrypt.genSaltSync(10);
    // const hash = bcrypt.hashSync(req.body.password, salt);
    const user = await User.findOne({ std_id: req.params.std_id });
    const { password, ...other } = user._doc;
    res.status(200).json({ ...other });
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    const data = users.map((user) => {
      const { password, isAdmin, ...other } = user._doc;
      return { ...other };
    });
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
