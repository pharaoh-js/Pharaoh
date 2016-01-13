import React from 'react'
import InlineCss from 'react-inline-css'

const Page = React.createClass({
  render () {
    return (
      <InlineCss stylesheet={`
          & .team {
            position: absolute;
            bottom:0;
            right:0;
            min-height: 350px;
            height:95%;
            width:86.75%;
            background-color:rgb(225, 225, 225);
          }
               `}>
              <div className="team">
                <h1>HOW TO PHARAOH JS!(like an all star)</h1>
              </div>
       </InlineCss>
    )
  }
})

export default Page
