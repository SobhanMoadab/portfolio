import React from 'react'

const Tag = () => {
    return (
        // tag container
        <a className='py-1 px-3 mb-2 mr-2' style={{
            ["padding" as any]: "4px 10px",
            ["margin-bottom" as any]: "0.5rem",
            ["margin-right" as any]: "0.5rem",
            ["cursor" as any]: "pointer",
            ["background" as any]: "#000",
            ["color" as any]: "#fff",
            ["font-size" as any]: ".9rem",
            ["display" as any]: "inline-block",
        }}>testing</a>
    )
}

export default Tag