import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserActivitySchema = new Schema({
  std_id: { type: String, required: true },
  activity: {
    university: {
      activity: { type: Array },
      count: { type: Number, required: true },
    },
    ability: {
      moral: {
        activity: { type: Array },
        count: { type: Number, required: true },
      },
      learning: {
        activity: { type: Array },
        count: { type: Number, required: true },
      },
      commu: {
        activity: { type: Array },
        count: { type: Number, required: true },
      },
      health: {
        activity: { type: Array },
        count: { type: Number, required: true },
      },
    },
    social: {
      activity: { type: Array },
      count: { type: Number, required: true },
    },
  },
});

export default mongoose.model('UserActivity', UserActivitySchema);
