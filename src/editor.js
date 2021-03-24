import { EditorState } from "@codemirror/state"
import { EditorView, keymap, highlightSpecialChars, drawSelection, highlightActiveLine } from "@codemirror/view"
import { history, historyKeymap } from "@codemirror/history"
import { foldKeymap } from "@codemirror/fold"
import { indentOnInput } from "@codemirror/language"
import { defaultKeymap } from "@codemirror/commands"
import { bracketMatching } from "@codemirror/matchbrackets"
import { closeBrackets, closeBracketsKeymap } from "@codemirror/closebrackets"
import { searchKeymap, highlightSelectionMatches } from "@codemirror/search"
import { autocompletion, completionKeymap } from "@codemirror/autocomplete"
import { commentKeymap } from "@codemirror/comment"
import { rectangularSelection } from "@codemirror/rectangular-selection"
import { defaultHighlightStyle } from "@codemirror/highlight"
import { lintKeymap } from "@codemirror/lint"
import { python } from "@codemirror/lang-python"

class CodeEditor extends HTMLElement {
  constructor() {
    super()

    const code = this.firstElementChild.innerText
    const shadow = this.attachShadow({ mode: 'open' })

    new EditorView({
      state: EditorState.create({
        doc: code,
        extensions: [
          highlightSpecialChars(),
          history(),
          drawSelection(),
          EditorState.allowMultipleSelections.of(true),
          indentOnInput(),
          defaultHighlightStyle.fallback,
          bracketMatching(),
          closeBrackets(),
          autocompletion(),
          rectangularSelection(),
          highlightActiveLine(),
          highlightSelectionMatches(),
          keymap.of([
            ...closeBracketsKeymap,
            ...defaultKeymap,
            ...searchKeymap,
            ...historyKeymap,
            ...foldKeymap,
            ...commentKeymap,
            ...completionKeymap,
            ...lintKeymap
          ]),
          python()
        ]
      }),
      parent: shadow,
      root: shadow
    })
  }
}

customElements.define("code-editor", CodeEditor)
