import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
  email: { type: String, required: true },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
});
export default mongoose.models.Cart || mongoose.model("Cart", CartSchema);
