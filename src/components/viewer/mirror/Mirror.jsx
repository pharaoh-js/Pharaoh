import React, { PropTypes } from 'react'
import InlineCss from 'react-inline-css'

const BASEREF = 'https://pharaoh-sands.firebaseio.com/'

const Mirror = React.createClass({
  makeFirePad (subRef) {
    let fpRef = new Firebase(BASEREF + subRef);
    let codeMirror = CodeMirror(document.getElementById('pad'), { lineWrapping: true });
    let firepad = Firepad.fromCodeMirror(fpRef, codeMirror,
      { defaultText: 'Hello Firepad!!!!' });
  },
  componentWillUpdate () {
    console.log('cWU');
  },
  componentDidMount () {
    this.makeFirePad(this.props.pad)
  },
  render () {
    return (
        <div>
          <div>This is the Mirror component</div>
          <div id="pad"></div>
        </div>
    )
  }
})

export default Mirror
