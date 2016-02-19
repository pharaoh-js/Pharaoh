var openButton, saveButton, editor, fileEntry, hasWriteAccess
  , fs        = require('fs')

require('nw.gui').Window.get().showDevTools()

function setFile(theFileEntry, isWritable){
  fileEntry      = theFileEntry
  hasWriteAccess = isWritable
}

function readFileIntoEditor(theFileEntry){
  fs.readFile(theFileEntry, function(err, data){
    if(err){
      console.log('failed', err)
    }
    handleDocumentChange(theFileEntry)
    editor.setValue(String(data))
  })
}

function writeEditorToFile(theFileEntry){
  var str = editor.getValue()
  fs.writeFile(theFileEntry, editor.getValue(), function(err){
  if(err){
    console.log('failed', err)
    return
  }
  handleDocumentChange(theFileEntry)
  console.log('wrote')
 })
}

var onChosenFileToOpen = function(theFileEntry){
  setFile(theFileEntry, false)
  readFileIntoEditor(theFileEntry)
}

var onChosenFileToSave = function(theFileEntry){
  setFile(theFileEntry, true)
  writeEditorToFile(theFileEntry)
}

function handleOpenButton(){
  $('#openFile').trigger('click')
}

function handleSaveButton(){
  if(fileEntry && hasWriteAccess){
    writeEditorToFile(fileEntry)
  } else {
    $('#saveFile').trigger('click')
  }
}

onload = function(){
  openButton = document.getElementById('open')
  saveButton = document.getElementById('save')
  openButton.addEventListener('click', handleOpenButton)
  saveButton.addEventListener('click', handleSaveButton)
  $('#saveFile').change(function(evt){
    onChosenFileToSave($(this).val())
  })
  $('#openFile').change(function(evt){
    onChosenFileToOpen($(this).val())
  })
  editor = CodeMirror(document.getElementById('pad'), config)
}

