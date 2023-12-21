import React from 'react'
import "./Mw.css"

function Mw({active, setActive, children}) {
    return (
        <div className={active ? "window active" : "window"} onClick={() => setActive(false)}>
            <div className='window_body' onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Mw
