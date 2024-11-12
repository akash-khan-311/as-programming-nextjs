import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false },
    avatar: { type: String, default: null },
    status: { type: String, default: "verified", required: true },
    role: { type: String, default: "user", required: true },
    phone: { type: String, default: "--------" },
    address: { type: String, default: "--------" },
  },
  { timestamps: true }
);

const User = mongoose.models?.User || mongoose.model("User", UserSchema);

export default User;
