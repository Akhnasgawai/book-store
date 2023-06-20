import React from 'react'
import '../css/Button.css'
import { Link } from 'react-router-dom'

const Button = () => {
    return (
        <>
            <div className='btnContainer'>
                <Link to="addBook" className="btn">Add Book</Link>
            </div>
        </>
    )
}

export default Button