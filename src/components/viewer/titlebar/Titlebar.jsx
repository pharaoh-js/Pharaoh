import React from 'react'
import InlineCss from 'react-inline-css'

const TitleBar = React.createClass({
  render () {
    return (
      <InlineCss stylesheet={`
        & .header-bar {
            border-top-right-radius: 3px;
            border-top-left-radius: 3px;
            line-height:30px;
            color:#0FB427;
            text-align:center;
            position: absolute;
            width:87.9%;
            height:4.8%;
            top:0;
            right:0;
            background-color:#37383A;
            z-index:999;
        }
               `}>
            <div className="header-bar">
                <button onClick={this.props.swap.bind(null, 'one')}>one</button>
                <button onClick={this.props.swap.bind(null, 'two')}>two</button>
                <button onClick={this.props.swap.bind(null, 'three')}>three</button>
              <span>&nbsp;&nbsp; {this.props.pad}</span>
            </div>
       </InlineCss>
    )
  }
})

export default TitleBar

