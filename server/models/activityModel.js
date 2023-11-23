import mongoose from 'mongoose';
const { Schema } = mongoose;

const ActivitySchema = new Schema({
  std_id: { type: String },
  activity_id: { type: String },
  activity_name: { type: String },
  activity_type: { type: String },
  activity_group: { type: String },
  hours: { type: Number },
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
