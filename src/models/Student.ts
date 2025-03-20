import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true }, // Kursga bog‘lash
}, { timestamps: true });

export default mongoose.models.Student || mongoose.model("Student", StudentSchema);
