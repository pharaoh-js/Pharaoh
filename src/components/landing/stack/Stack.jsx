import React from 'react'
import InlineCss from "react-inline-css"

const Header = React.createClass({
    render (){
        return(
            <InlineCss stylesheet={`
              & .atom-icon {
                  width: 50px;
              }
              & .atom-container {
                  text-align:center;
                  font-size: 18px;
                  margin:20px;
                  padding:2px;
                  border: 2px solid black;
                  border-radius:3px;
                  background-color:whitesmoke;
              }
              & .atom-container div {
                font-size:30px;
              }
               & .atom-container a {
                  color: black;
              }
                & .atom-container a:hover {
                  color: #0FB427;
              }
            `}>
              <div className="atom-container">
                <div>Our App Stack</div>
                <img src="src/shared/images/firebase.png" className="atom-icon"></img>
                <img src="src/shared/images/unnamed.png" style={{width:'125px'}}></img>
                <img src="src/shared/images/react-opti.png" style={{width:'125px'}}></img>
                <img src="src/shared/images/atom.png" className="atom-icon"/>
                <br/>
                <a href="https://atom.io/">Download Atom today and get started.</a>
              </div>
            </InlineCss>
        )
    }
})

export default Header
