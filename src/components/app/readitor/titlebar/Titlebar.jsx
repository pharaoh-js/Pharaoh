import React from 'react'
import InlineCss from 'react-inline-css'

const TitleBar = React.createClass({
  render () {
    let icon = this.props.isSetting ? 'src/shared/images/close_icon.png' : 'src/shared/images/settings-icon.png';
    let handleClick = this.props.isSetting ? this.props.hideSettings : this.props.showSettings;
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
        & .setting-icon {
            float:right;
            margin:4px;
            z-index:9999;
          }
          & .setting-icon:hover {
            cursor: pointer;
          }
               `}>
            <div className="header-bar">
                <div onClick={handleClick} className="setting-icon">
                  <img src={icon} style={{width: '22px'}}></img>
                </div>
            </div>
       </InlineCss>
    )
  }
})

export default TitleBar
