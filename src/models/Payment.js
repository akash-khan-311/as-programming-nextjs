import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
  tran_id: {
    type: String,
    required: true,
  },
  course_id: {
    type: String,
    required: true,
    ref: "Course",
  },
  user_email: {
    type: String,
    required: true,
    ref: "User",
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
