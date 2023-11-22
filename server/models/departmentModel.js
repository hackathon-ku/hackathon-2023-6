import mongoose from 'mongoose';
const { Schema } = mongoose;

const DepartmentSchema = new Schema({
  department_id: { type: String, required: true },
  majors: { type: Array, required: true },
  department_name_th: { type: String, required: true },
  department_name_en: { type: String, required: true },
});

export default mongoose.model('Department', DepartmentSchema);
