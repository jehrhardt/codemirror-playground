import {EditorState, EditorView, basicSetup} from "@codemirror/basic-setup"
import {python} from "@codemirror/lang-python"

class CodeEditor extends HTMLElement {
  constructor() {
    super()

    const shadow = this.attachShadow({mode: 'open'})
    new EditorView({
      state: EditorState.create({
        extensions: [
          basicSetup,
          python()
        ]
      }),
      parent: shadow,
      root: shadow
    })
  }
}

customElements.define("code-editor", CodeEditor)
