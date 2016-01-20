import React     from 'react'
import InlineCss from 'react-inline-css'
const stylesheet = require('!css!less!./gettingStarted.less').toString()

const GettingStarted = React.createClass({
  render() {
    return (
      <InlineCss componentName="GettingStarted" stylesheet={stylesheet}>
        <div className="container">
          <div className="header">Getting Started</div>
          <div className="option1">
            <big>Start session from browser editor.

            </big>
            <img src="src/shared/images/pharaohclient.png" style={{width:'47%',float:'left',margin:'20px 0 0 5px'}}></img>
            <div className="start-session">
              <big>Start new Session
                <input style={{width:'60%'}} placeholder="url extension...." type="text"></input>  <button>Go</button>
              </big>
              <p>lskdj falksdjfals kdjf;alk dsjf alk d alsk df jlkj lsdkjfa lsk djf alskdjf
              al sk jflsk dfja l sdj fa;ls kdj fa;lk jdf als dkj fa;l skdjf.
              </p>
            </div>
          </div>
          <div className="desktop">
            <big>Or install Pharaoh desktop app.</big>
            <div>
              <span className="npmInstall">npm i -g pharaoh</span>
              <p>lskdj falksdjfals kdjf;alk dsjf alk d alsk df jlkj lsdkjfa lsk djf alskdjf
              al sk jflsk dfja l sdj fa;ls kdj fa;lk jdf als dkj fa;l skdjf.
              </p>
              <img src="src/shared/images/desktop.png" style={{
                width:'46%',position:'absolute',right:'8px',bottom:'5px'
                }}></img>
            </div>
          </div>
        </div>
      </InlineCss>
    )
  }
})

export default GettingStarted
// <li>Paraoh browser based editor.</li>
// <img src="http://www.iconsdb.com/icons/preview/white/down-xxl.png"
//   style={{width:'15px',position:'relative',top:'5px',left:'7px'}}
// ></img>
// <div className="scroll-down">
//   <big>Scroll Down</big>
//   <div>
//     <span style={{position:'relative',left:'2.3px'}}>\</span><span style={{position:'relative',right:'2.3px'}}>/</span>
//   </div>
// </div>
