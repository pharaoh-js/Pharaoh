import React, { PropTypes } from 'react'
import InlineCss from 'react-inline-css'

const BASEREF = 'https://pharaoh-sands.firebaseio.com/'

const Mirror = React.createClass({
  componentDidMount () {
    let fpRef = new Firebase(BASEREF + this.props.pad);
    let codeMirror = CodeMirror(document.getElementById('pad'), { lineWrapping: true });
    let firepad = Firepad.fromCodeMirror(fpRef, codeMirror,
      { defaultText: 'Hello Firepad!!!!' });
  },
  render () {
    return (
        <div>
          <div id="pad"></div>
        </div>
    )
  }
})

export default Mirror 
