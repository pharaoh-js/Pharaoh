* immediate:
  * `fileReader` for reading in/saving out files
    * `firepad.getText()` (and `setText()`, and same with HTML) -- use on event to write to fs
    * codemirror's `doc.getValue()` and `.setValue`??
  * better bundling
    * `nwjs` is out.
    * webpack +  codemirror minified + use strict = nw.js problems?
      * especially with opening devtools, at all?
    * get executables
      * `zip -r ../${PWD##*/}.nw *`
        * This makes a .nw (zip) for distribution
      * `nwbuild -p win64,osx64,linux64 -v 0.12.3 -f .`
        * `cat `which nw` app.nw > app && chmod +x app`
        * this would work with deployed/already bundled app, and turn into executable binary
* our licence(s)(?) + those of dependencies, listed somewhere

* ui for dealing with files:
  * should we set up an autosave (at x ms or whatever)?
  * actual interface design bit -- where are we putting the open and save (filetree?)
  * `doc/examples/editor` has a ctrl/cmd-s example in it.
  * here's the basic idea:

    // codemirror config...
    // keymMap, mode, lineNumbers, etc.,
    extraKeys: {
      'Cmd-S'  : function(instance){savingFunction()}
    , 'Ctrl-S' : function(instance){savingFunction()}
    , 'Cmd-O'  : function(instance){openingFunction()}
    , 'Ctrl-O' : function(instance){openingFunction()}
    }

* desktop feature decisions:
  * notifications
  * context menu(s)
  * tray icon/menu
  * exploring fs in-app (rather than using native dialog)?

