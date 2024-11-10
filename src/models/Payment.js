import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
  tran_id: {
    type: String,
    required: true,
  },
  course_id: {
    type: String,
    required: true,
    ref: "Course", // Assuming you have a 'Course' model
  },
  user_id: {
    type: String,
    required: true,
    ref: "User", // Assuming you have a 'User' model
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: "pending",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Payment ||
  mongoose.model("Payment", PaymentSchema);
