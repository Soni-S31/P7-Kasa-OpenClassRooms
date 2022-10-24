import React from 'react'
import './collapse.css'


export default function Collapse (props) {
    
  return (
        <div className="collapse_div">
          <button className="collapse_btn"  >
            <p className="collapse_title" >{props.title}</p>
    
          </button>
          <div className="collapse_content">
            <p className="collapse_text">{props.content}</p>
          </div>
        </div>
    
       
    )}
    
  
    