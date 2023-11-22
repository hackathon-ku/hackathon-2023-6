import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSubjectRegisteredSchema = new Schema({
  std_id: { type: String, required: true },
  general: {
    wellness: {
      subject: { type: Array },
      credits: { type: Number, required: true },
    },
    entrepreneurship: {
      subject: { type: Array },
      credits: { type: Number, required: true },
    },
    lang: {
      subject: { type: Array },
      credits: { type: Number, required: true },
    },
    citizen: {
      subject: { type: Array },
      credits: { type: Number, required: true },
    },
    aesthetics: {
      subject: { type: Array },
      credits: { type: Number, required: true },
    },
  },
  specialized: {
    core: {
      subject: { type: Array },
      credits: { type: Number, required: true },
    },
    special: {
      subject: { type: Array },
      credits: { type: Number, required: true },
    },
    selected: {
      subject: { type: Array },
      credits: { type: Number, required: true },
    },
  },
  free: {
    subject: { type: Array },
    credits: { type: Number, required: true },
  },
});

export default mongoose.model(
  'UserSubjectRegistered',
  UserSubjectRegisteredSchema
);
