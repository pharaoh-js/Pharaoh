// test if we're in a browser made in the last five years or so, i guess:
if(window.File && window.FileReader && window.FileList && window.Blob){
  // do all the things
} else {
  // don't.
}

// this basically just works with <input type="file">
// (which can take a multiple, like <input type="file" multiple>)
// always returns FileList obj (which is array), so files[0]
// will always get what we want.
// file obj gives us data on name, type, size, and modification date
// then we can either do a document.getElementById() or Event.target.files
function readOneFile(evt){
  var f = evt.target.files[0]
  if(!f){
    console.log('no file')
  } else if (!file.type.match('text.*')){
    console.log(f.name + ' is not a text file!')
  } else {
    var r  = new FileReader()
      , cm = CodeMirror
    r.onload = function(e){
      var t = e.target.result
      cm.setValue(t)
      console.log(f.name + f.type + f.size)
    }
    r.readAsText(f)
  } else {
    console.log('fail')
  }
}
document.getElementById('fileinput').addEventListener('change', readOneFile, false)
// <input type="file" id="fileinput">

