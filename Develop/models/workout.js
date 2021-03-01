const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//we'll export this workout schema when we're done!
const workoutSchema = new Schema({
    //here well establish the exercises needed for the workout schema

    //So, in the mongodb we need a row for date & for exercises

    day: {
        type: Date,
        default: Date.now,
    },
    exercise: [{
        //for exercise, we need type, name, duration, weight, reps, and sets

        type: {
            type: String,
            trim: true,
            required: "Please select a type"
        },
        name: {
            type: "String",
            trim: true,
            required: "Enter a name"
        },
        duration: {
            type: Number,
            required: "Enter an amount"
        },
        weight: {
            type: Number,
            required: "Enter an amount"
        },
        reps: {
            type: Number,
            required: "Enter an amount"
        },
        sets: {
            type: Number,
            required: "Enter an amount"
        }
    }
    ]
})