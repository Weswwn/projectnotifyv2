import React from 'react';

export const Toaster = props => {
    console.log(props)
    return (
    <div>
        {props.status === 'success' ? <div style={{backgroundColor: 'green'}}>{props.msg}</div> : 
        <div style={{backgroundColor: 'red'}}>{props.msg}</div>}
    </div>
    )
}