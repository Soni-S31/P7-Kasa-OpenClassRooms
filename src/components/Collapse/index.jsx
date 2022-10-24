import React, { useState, useRef } from 'react'
//import Chevron from './chevron';
import './collapse.css'


export default function Collapse (props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  
  const content = useRef(null);
  
  function toggleCollapse() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    
  }
  return (
        <div className="collapse_div">
          <button className={`collapse_btn ${setActive}`} onClick={toggleCollapse}  >
            <p className="collapse_title" >{props.title}</p>
           
      </button>
    
          <div className="collapse_content" 
          ref={content}
          style={{ maxHeight: `${setHeight}` }}>
            <p className="collapse_text">{props.content}</p>
          </div>
        </div>
    
       
    )}
    
  
    