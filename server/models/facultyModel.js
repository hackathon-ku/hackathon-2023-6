import mongoose from 'mongoose';
const { Schema } = mongoose;

const FacultySchema = new Schema({
  faculty_id: { type: String, required: true },
  departments: { type: Array, required: true },
  faculty_name_th: { type: String, required: true },
  faculty_name_en: { type: String, required: true },
});

export default mongoose.model('Faculty', FacultySchema);
