import React from 'react';

const  ToggleButton = (props) => {
    return (
       <button className="toggle-btn d-flex d-lg-none" onClick= {props.click}>
           <div className="toggle-btn-line"></div>
           <div className="toggle-btn-line"></div>
           <div className="toggle-btn-line"></div>
       </button>
    )
}

export default ToggleButton;
