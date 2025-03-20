import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
    courseTitle: {type: String, required: true},
    teacher: {type: String, required: true},
    coin: {type: Number, required: true},
    student: {type:  mongoose.Schema.Types.ObjectId, ref: "Student"}
}, { timestamps: true})

export default mongoose.models.Course || mongoose.model("Course", CourseSchema)