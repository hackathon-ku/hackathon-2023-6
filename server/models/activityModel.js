import mongoose from 'mongoose';
const { Schema } = mongoose;

const ActivitySchema = new Schema({
  std_id: { type: String, require: true },
  activity_id: { type: String, require: true },
  activity_name: { type: String, required: true },
  activity_type: { type: String, required: true },
  activity_group: { type: String, required: true },
  hours: { type: Number, required: true },
  location: { type: String },
  detail: { type: String },
  register_date: {
    start_date: { type: Date },
    end_date: { type: Date },
  },
  event_date: {
    start_date: { type: Date },
    end_date: { type: Date },
  },
  activity_for: { type: String },
  hilights: { type: String },
  link: { type: String },
  activity_image: { type: String },
});

export default mongoose.model('Activity', ActivitySchema);
