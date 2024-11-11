import mongoose from "mongoose";
const AssignmentSchema = new mongoose.Schema({
  assignment: {
    liveLink: String,
    codeLink: String,
    serverCodeLink: String,
  },
  instructorEmail: String,
  courseName: String,
  courseImg: String,
  assignmentId: mongoose.Schema.Types.ObjectId,
  studentName: String,
  studentEmail: String,
  instructorName: String,
  mark: { type: String, default: "pending" },
  feedback: { type: String, default: "coming soon" },
  createdAt: { type: Date, default: Date.now },
});

const Assignment =
  mongoose.models.Assignment || mongoose.model("Assignment", AssignmentSchema);
export default Assignment;
