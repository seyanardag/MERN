import React from 'react'

export default function WorkoutDetails({workout}) {
  return (
    <div>
      <hr/>
      WorkoutDetails <br/>
        {workout.title}
        <p><strong>Load (kg):</strong> {workout.load}</p>
        <p><strong>reps:</strong> {workout.reps}</p>
        <p>{workout.createdAt}</p>
        
    </div>
  )
}
