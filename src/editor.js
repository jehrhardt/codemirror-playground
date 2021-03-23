import {EditorState, EditorView, basicSetup} from "@codemirror/basic-setup"
import {python} from "@codemirror/lang-python"

let editor = new EditorView({
  state: EditorState.create({
    extensions: [basicSetup, python()]
  }),
  parent: document.body
})
