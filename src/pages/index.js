import React, {useState} from "react"
import SEO from "../components/seo"
import { css } from 'emotion'
import Circle from "../components/circle"


const fishies=css`
background-image: url("https://images.unsplash.com/photo-1472715148636-92e348325950?ixlib=rb-1.2.1&auto=format&fit=crop&w=3000&q=80");
min-height: 100vh;
width: 100%;
background-size:cover;
display:flex;
background-attachment: fixed;
`



function IndexPage(){

  let [isBlurred, setBlur]= useState(false)

  return(<div>
    <SEO title="Home" />
    <Circle title="FISHIES" setBlur={setBlur} />
    <div className={fishies} onDragOver={dragOver} style={(isBlurred? { filter: "blur(10px"}: {})} onDrop={drop}>

    </div>
<p> I love you
or
not?
</p>
  </div>
)
}

export default IndexPage
