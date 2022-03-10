import React from 'react'

function ErrMess(props) {
    return (
        <div className={`alert alert-${props.variant || 'info'}`}>
      {props.children}
    </div>
    )
}

export default ErrMess
