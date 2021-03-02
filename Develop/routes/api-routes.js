const router = require("express").Router();

const Workout = require("../models");


//i'm gonna need the urls "/api/workouts/", "/api/workouts/range"
router.post("/api/workouts/", ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout)
})