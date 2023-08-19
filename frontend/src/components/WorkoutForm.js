import React from 'react'
import { useState } from 'react'

export default function WorkoutForm() {
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = { title, load, reps }



        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()
        console.log(response)

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setError(null)
            setTitle('')
            setLoad('')
            setReps('')
            console.log('New workout added')
        }


    }

    return (
        <div>
            <form className='create' onSubmit={handleSubmit}>
                <h3>Create new Workout</h3>

                <div>
                    <label htmlFor='excerciseTitle'>Exercise Title:</label>
                    <input className='form-control'
                        id='excerciseTitle'
                        type='text'
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </div>
                <div>
                    <label htmlFor='exerciseLoad'>Load:</label>
                    <input
                        className='form-control'
                        id='exerciseLoad'
                        type='number'
                        onChange={(e) => setLoad(e.target.value)}
                        value={load}
                    />
                </div>
                <div>
                    <label htmlFor='exerciseReps'>Reps:</label>
                    <input
                        className='form-control'
                        id='exerciseReps'
                        type='number'
                        onChange={(e) => setReps(e.target.value)}
                        value={reps}
                    />
                </div>
                <button type='submit'>Add Workout</button>
                {error && <div className='error'>{error}</div>}
            </form>

        </div>
    )
}
