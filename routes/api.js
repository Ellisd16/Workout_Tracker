const router = require("express").Router();

const db = require("../models");


//i'm gonna need the urls "/api/workouts/", "/api/workouts/range"

//create a workout
router.post("/api/workouts/", ({ body }, res) => {
    db.Workout.create(body).then((dbWorkout) => {
        res.json(dbWorkout)
    }).catch(err => {
        res.json(err)
    });
});

//route to add exercise
router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findOneAndUpdate(
        { _id: req.params.id },
        {
            $inc: { totalDuration: req.body.duration },
            $push: { exercises: req.body }
        },
        { new: true }
    ).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err)
    })
});

//showing range
router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).then(dbWorkout => {
        console.log("All Workouts:", dbWorkout);
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err)
    })
});

// getting workouts

router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(dbWorkout => {
        dbWorkout.forEach(workout => {
            let total = 0;
            workout.exercises.forEach(e => {
                total += e.duration;
            });
            workout.totalDuration = total;
        });
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    })
});
//exporting the api routes

module.exports = router;