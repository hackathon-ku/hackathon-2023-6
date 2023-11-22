import mongoose from 'mongoose';
const { Schema } = mongoose;

const SubjectSchema = new Schema({
  subject_id: { type: String, require: true },
  subject_name_th: { type: String, required: true },
  subject_name_en: { type: String, required: true },
  subject_type: { type: String, required: true },
  subject_group: { type: String, required: true },
  credit: { type: Number, required: true },
});

export default mongoose.model('Subject', SubjectSchema);
