import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
  level: { type: String, required: true },
  duration: { type: Number, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  status: { type: String, required: true },
  instructor: {
    name: { type: String, required: true },
    email: { type: String, required: true },
  },
});
export default mongoose.models.Course || mongoose.model("Course", CourseSchema);
