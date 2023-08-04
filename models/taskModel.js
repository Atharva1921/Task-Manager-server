import mongoose from "mongoose";

const taskSchema = mongoose.Schema(
    {
        name : {
            type : String,
            required : [true, 'Please enter task name'],
            unique : true,
        },
        description : {
            type : String,
            required : [true, 'Please enter description'],
        },
        completed : {
            type : Boolean,
            required : true,
            default : false,
        },
    },
    {
        timestamps: true
    },
);

const task = mongoose.model("Task", taskSchema);

export default task;