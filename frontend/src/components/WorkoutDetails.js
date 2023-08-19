import React from 'react'

export default function WorkoutDetails({ workout }) {
  return (
    <div>

      <div class="card border-primary mb-3" style={{ "max-width": "18rem;" }}>
        <div class="card-header fw-bold bg-primary-subtle text-secondary"> Workout Details</div>
        <div class="card-body text-primary">
          <h5 class="card-title"> Workout title: {workout.title}</h5>

          <div>
            <div> Load (kg): {workout.load}</div>
            <div>reps: {workout.reps}</div>
            <div>{workout.createdAt}</div>
          </div>

        </div>
      </div>

    </div>
  )
}
