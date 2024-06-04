import React from 'react'
import Header from '../Header'
import Nav from '../../nav/Nav'

function Weather() {
    return (
        <React.StrictMode>
            <Nav />
            <Header />
            <div className='h-32'>Weather</div>
        </React.StrictMode>
    )
}

export default Weather