import React from "react"
import { css } from "emotion"


const box = css`
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
font-family:'Montserrat', sans-serif;
font-weight: bold;
font-size: 10em;
z-index:2;
position:absolute;
margin-left:30px;
margin-top:30px;
background-color:white;
width: 400px;
height: 400px;
border-radius: 50%;
box-shadow: 20px 20px 20px rgba(0,0,0,0.25);
border:none;
outline:none;
&:hover{
background-color: turquoise;
}
`

function Circle(props) {
    
  return (
    <button className={box} onDragStart={dragStart} onDragOver={dragOver} draggable={true} onMouseEnter={()=>props.setBlur(true)} onMouseLeave={()=>props.setBlur(false)}>{props.title}</button>
  )
}

export default Circle;