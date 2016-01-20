import React, { PropTypes } from 'react'
import Mirror               from './mirror/Mirror'
import Settings             from './settings/Settings'


const Wrapper = React.createClass({
  handleClick (event) {
    let eNotClose = ['wrapper','settings']
    let e = event;
    if (eNotClose.indexOf(e.target.offsetParent.className) === -1){
      this.props.hideSettings()
    }
  },
  render () {
    let mirror =   <Mirror pad={this.props.pad} config={this.props.config}/>;
    let settings = this.props.isSetting ? <Settings themes={this.props.themes} hideSettings={this.props.hideSettings} updateSettings={this.props.updateSettings}/> : null
    return (
      <div
        onClick={this.handleClick}
        className="wrapper"
        style={{height: '100%', position: 'relative',left:'19%', width:'81%'}}>
        {mirror}
        {settings}
      </div>
    )
  }
})

export default Wrapper
