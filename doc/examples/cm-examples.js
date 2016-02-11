// loading a file into codemirror
function loadfile(input){
  var ed = CodeMirror(document.getElementById('pad'), config)
  var reader = new FileReader()
  reader.onload = function(e){
    ed.setValue(e.target.result)
  }
  reader.readAsText(input.files[0])
}
// <input type="file" onchange="loadfile(this)">

// and saving one out
function saveText(){
  var textWrite = document.getElementById('pad').value
    , textBlob  = new Blob([textToWrite], {type:'text/plain'})
    , fileNameToSaveAs = 'foo.js'
    , downloadLink = document.createElement('a')
  downloadLink.download = fileNameToSaveAs
  downloadLink.innerHTML = 'save'
  if(window.webkitURL != null){ // chromium lets click clink w/o adding to DOM
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob)
  } else { // mozilla does not
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob)
    downloadLink.onclick = destroyClickedElement
    downloadLink.style.display = 'none'
    document.body.appendChild(downloadLink)
  }
  downloadLink.click()
}
function destroyClickedElement(event){document.body.removeChild(event.target)}

// <a href="#my-header" onclick='saveTextAsFile()'>download</a>
