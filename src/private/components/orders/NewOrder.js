import React from 'react'
import { Link } from 'react-router-dom'

export const NewOrder = () => {
    return (
        <div>
            <Link to="orderId">
                <button>SEND ORDER</button>
            </Link>
        </div>
    )
}