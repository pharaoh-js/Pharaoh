// input type="file" id="fileelm" accept="text/*" style="display:none;" onchange="handleFiles(this.files)">
// <a href="javascript:void(0)" id="filesel">open</a>

var filesel = document.getElementById('fileSelect')
  , fileelm = document.getElementById('fileel')
filesel.addEventListener('click', function(e){
  if(fileelm){
    fileelm.click()
  }
  e.preventDefault()
}, false)

