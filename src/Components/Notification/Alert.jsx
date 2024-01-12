import React from 'react'

const Alert = () => {
    return (
        <div>
        <div className="bg-blue-100 my-2 border-t border-b border-blue-500 text-blue-700 px-4 py-3 rounded-md" role="alert">
        <p className="font-bold">Informational message</p>
        <p className="text-sm">Some additional text to explain said message.</p>
        </div>
        </div>
    )
}

export default Alert
