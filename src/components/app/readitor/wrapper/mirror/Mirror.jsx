import React, { PropTypes } from 'react'

const BASEREF = 'https://pharaoh-sands.firebaseio.com/'

const Mirror = React.createClass({
  makeFirePad (subRef) {
    let fpRef = new Firebase(BASEREF + subRef);
    let codeMirror = CodeMirror(document.getElementById('pad'), {
      lineWrapping: true
    ,  mode             : 'javascript'
    , lineNumbers       : true
    // , matchBrackets     : true
    // , lineWrapping      : true
    // , placeholder       : 'function foo(bar){\n  return bar\n}\n'
    // , theme             : 'abcdef'
    // , keyMap            : 'sublime'
    // , autoCloseBrackets : true
    // , autoCloseTags     : true
    });
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

