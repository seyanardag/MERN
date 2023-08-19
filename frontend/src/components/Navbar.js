import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header>
        <div className='Navbar'>
            <Link to='/'>
                <h1>Workout Plan</h1>
            </Link>
        </div>
    </header>
  )
}
