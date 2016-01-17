import React, { PropTypes } from 'react'
import InlineCss from 'react-inline-css'

const BASEREF = 'https://pharaoh-sands.firebaseio.com/'

const Mirror = React.createClass({

  makeFirePad (subRef, config) {
    let fpRef = new Firebase(BASEREF + subRef);
    let codeMirror = CodeMirror(document.getElementById('pad'), config);
    this.firepad = Firepad.fromCodeMirror(fpRef, codeMirror,
      { defaultText: 'Hello Firepad!!!!' });
  },
  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.props.config !== nextProps.config ;
  // },
  componentDidUpdate () {
    let parent = this.refs.parent
    let child = parent.firstChild
    parent.removeChild(child)
    this.makeFirePad(this.props.pad, this.props.config)
  },
  componentDidMount () {
    this.makeFirePad(this.props.pad, this.props.config)
  },
  render () {
    return (
        <div>
          <div ref="parent" id="pad"></div>
        </div>
    )
  }
})

export default Mirror
