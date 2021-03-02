const router = require("express").Router();

const db = require("../models");


//i'm gonna need the urls "/api/workouts/", "/api/workouts/range"

//
router.post("/api/workouts/", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err)
        });
})

//exporting the api routes

module.exports = router