import React from 'react'
import InlineCss from 'react-inline-css'

const HowTo = React.createClass({
render (){
    return(
        <InlineCss stylesheet={`
        & .container {
            border: 1px solid black;
            border-radius: 10px;
            width:70%;
            margin: 3% 15%;
            box-shadow: 5px 5px 5px 5px gray;
            background-color:whitesmoke;
        }
        & .header {
            border-top-right-radius: 10px;
            border-top-left-radius: 10px;
            padding-top:2px;
            background-color: #152329;
            color: #0FB427;
            border-bottom: 2px solid black;
            text-align:center;
        }
           & .container h2 {
               margin-bottom: 8px;
        }
        & .container p {
            padding: 0 10px;
            font-size: 16px;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
        }
          & .container big {
            font-weight: bold;
            margin: 15px;
            border-bottom:1px solid black;
        }
        `}>
          <div className="container">
            <div className="header">
              <h2>How to use/About Pharaoh</h2>
            </div>
            <br/>
            <big>About:</big>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin, mi in malesuada molestie, lorem turpis aliquam augue, eget tincidunt arcu tellus in ipsum. Vestibulum eget mi nec nibh convallis pretium quis sit amet erat. Sed ullamcorper magna tellus, ut aliquet orci molestie vel. Quisque tempor tellus purus, ut eleifend eros porta sed. Vestibulum imperdiet suscipit placerat. Cras quis elit at lectus pulvinar rutrum. Donec facilisis ultricies quam et auctor. Praesent a tempor ligula, ac feugiat dolor
            </p>
            <big>How to use:</big>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin, mi in malesuada molestie, lorem turpis aliquam augue, eget tincidunt arcu tellus in ipsum. Vestibulum eget mi nec nibh convallis pretium quis sit amet erat.
            </p>
            <p>
              Sed ullamcorper magna tellus, ut aliquet orci molestie vel. Quisque tempor tellus purus, ut eleifend eros porta sed. Vestibulum imperdiet suscipit placerat. Cras quis elit at lectus pulvinar rutrum. Donec facilisis ultricies quam et auctor. Praesent a tempor ligula, ac feugiat dolor
            </p>

          </div>
        </InlineCss>
    )
  }
})
export default HowTo
