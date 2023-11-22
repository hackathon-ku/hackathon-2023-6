import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import departmentModel from '../models/departmentModel.js';
import facultyModel from '../models/facultyModel.js';
import majorModel from '../models/majorModel.js';

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).send({ message: 'User not found.' });

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect)
      return res.status(400).send({ message: 'Wrong username or password.' });
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );
    const department = await departmentModel.findOne({
      department_id: user.department_id,
    });
    const faculty = await facultyModel.findOne({ faculty_id: user.faculty_id });
    const major = await majorModel.findOne({ major_id: user.major_id });

    const { password, faculty_id, department_id, major_id, ...otherData } =
      user._doc;
    res.status(200).send({
      details: {
        ...otherData,
        faculty: {
          faculty_id: faculty.faculty_id,
          faculty_name_th: faculty.faculty_name_th,
          faculty_name_en: faculty.faculty_name_en,
        },
        department: {
          department_id: department.department_id,
          department_name_th: department.department_name_th,
          department_name_en: department.department_name_en,
        },
        major,
      },
      access_token: token,
    });
  } catch (error) {
    next(error);
  }
};
