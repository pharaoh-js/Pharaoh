import React, { PropTypes } from 'react'
import InlineCss from 'react-inline-css'

const BASEREF = 'https://pharaoh-sands.firebaseio.com/'

const Mirror = React.createClass({
  makeFirePad (subRef) {
    let fpRef = new Firebase(BASEREF + subRef);
    let codeMirror = CodeMirror(document.getElementById('pad'), { lineWrapping: true });
    this.firepad = Firepad.fromCodeMirror(fpRef, codeMirror,
      { defaultText: 'Hello Firepad!!!!' });
  },
  componentDidUpdate () {
    this.makeFirePad(this.props.pad)
  },
  componentDidMount () {
    this.makeFirePad(this.props.pad)
  },
  render () {
    return (
        <div>
          <div>Show me the '{this.props.pad}' pad</div>
          <div id="pad"></div>
        </div>
    )
  }
})

export default Mirror
