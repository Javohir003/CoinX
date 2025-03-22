import { Schema, model, models } from "mongoose";


const CourseSchema = new Schema(
    {
        courseTitle: String,
        teacher: String,
    }, { timestamps: true }
)

const Course = models.Course || model("Course", CourseSchema)
export default Course