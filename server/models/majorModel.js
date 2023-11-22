import mongoose from 'mongoose';
const { Schema } = mongoose;

const MajorSchema = new Schema({
  major_id: { type: String, required: true },
  course_id: { type: String, required: true },
  major_name_th: { type: String, required: true },
  major_name_en: { type: String, required: true },
});

export default mongoose.model('Major', MajorSchema);
