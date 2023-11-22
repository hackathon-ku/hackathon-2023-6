import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const login = async (req, res, next) => {
  try {
    console.log(req.body);
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).send({ message: 'User not found.' });
    console.log(user, 1);
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    console.log(isPasswordCorrect, 2);

    if (!isPasswordCorrect)
      return res.status(400).send({ message: 'Wrong username or password.' });
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );
    const { password, isAdmin, ...otherData } = user._doc;
    res.status(200).send({ details: { ...otherData }, access_token: token });
  } catch (error) {
    next(error);
  }
};
