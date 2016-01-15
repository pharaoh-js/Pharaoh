import React, { PropTypes } from 'react'
import InlineCss from 'react-inline-css'

const BASEREF = 'https://pharaohjs.firebaseio.com/session/'

const Mirror = React.createClass({
  makeFirePad (subRef) {
    let fpRef = new Firebase(BASEREF + subRef);
    let codeMirror = CodeMirror(document.getElementById('pad'), { lineWrapping: true });
    this.firepad = Firepad.fromCodeMirror(fpRef, codeMirror,
      { defaultText: 'Hello Firepad!!!!' });
  },
  componentDidUpdate () {
    let parent = this.refs.parent
    let child = parent.firstChild
    parent.removeChild(child)
    this.makeFirePad(this.props.pad)
  },
  componentDidMount () {
    this.makeFirePad(this.props.pad)
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
