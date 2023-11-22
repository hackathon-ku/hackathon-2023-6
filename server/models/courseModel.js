import mongoose from 'mongoose';
const { Schema } = mongoose;

const CourseSchema = new Schema({
  course_id: { type: String, required: true },
  required_subject: {
    general: {
      wellness_credits: {
        type: Number,
        required: true,
      },
      entrepreneurship_credits: {
        type: Number,
        required: true,
      },
      lang_credits: {
        type: Number,
        required: true,
      },
      citizen_credits: {
        type: Number,
        required: true,
      },
      aesthetics_credits: {
        type: Number,
        required: true,
      },
    },
    specialized: {
      core_credits: {
        type: Number,
        required: true,
      },
      special_credits: {
        type: Number,
        required: true,
      },
      selected_credits: {
        type: Number,
        required: true,
      },
    },
    free: {
      type: Number,
      required: true,
    },
  },
  required_activity: {
    university: {
      type: Number,
      required: true,
    },
    ability: {
      moral: {
        type: Number,
        required: true,
      },
      learning: {
        type: Number,
        required: true,
      },
      commu: {
        type: Number,
        required: true,
      },
      health: {
        type: Number,
        required: true,
      },
    },
    social: {
      type: Number,
      required: true,
    },
  },
});

export default mongoose.model('Course', CourseSchema);
