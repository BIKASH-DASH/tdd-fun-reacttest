import React from 'react'

export default function Congrats({success}) {
    return (
        <div>
            <div className='success-message'>
                {
                    (success)? 'congrats' : 'sorry'
                }
            </div>
        </div>
    )
}
