// Create Model folder and add Model file (Workout.js)
// - include the following properties to the Workout Model:
//     - day (type -> Date)
//     - exercises (type -> Array)

// - Inside the "exercises" property Array, you will store each of the exercises for that workout as objects.
// - Each object inside the "exercises" property will have the following properties:
//     - type (type -> String)
//     - name (type -> String)
//     - duration (type -> Number)
//     - weight (type -> Number)
//     - reps (type -> Number)
//     - sets (type -> Number)
//     - distance (type -> Number)


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {  
    type: Date,
    default: Date.now
  },
  exercises: [
    {
    type: {
        type: String,
        trim: true,
        required: "Enter an exercise type"
    },
    name: {
        type: String,
        trim: true,
        required: "Enter an exercise name"
    },
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number,
   }
  ] 
},
);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;