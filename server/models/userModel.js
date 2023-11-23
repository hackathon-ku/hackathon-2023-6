import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
  first_name_th: { type: String, required: true },
  last_name_th: { type: String, required: true },
  first_name_en: { type: String, required: true },
  last_name_en: { type: String, required: true },
  gender: { type: Number, required: true },
  std_id: { type: String, required: true },
  profile_pic: { type: String, required: true },
  faculty_id: { type: String, required: true },
  department_id: { type: String, required: true },
  major_id: { type: String, required: true },
  campus_id: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
});

export default mongoose.model('User', UserSchema);
