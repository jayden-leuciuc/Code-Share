import MonacoEditor, {EditorDidMount} from "@monaco-editor/react";

interface CodeEditorProps {
    initialValue: string;
    onChange(value:string): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({initialValue, onChange}) => {
  const onEditorDidMount: EditorDidMount=(getValue, monacoEditor)=> {
    monacoEditor.onDidChangeModelContent(()=> {
      onChange(getValue())
    })

    monacoEditor.getModel()?.updateOptions({tabSize: 2})
  }

  return (
      <MonacoEditor
        editorDidMount={onEditorDidMount}
        value={initialValue}
        theme="vs-dark"
        height={500}
        language="javascript"
        options={{
          minimap: {
            enabled: false,
          },
          wordWrap: "on",
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
  );
};

export default CodeEditor