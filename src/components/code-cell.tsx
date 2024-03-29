import { useState, useEffect } from 'react';
import CodeEditor from './code-editor';
import Preview from './preview';
import bundle from '../bundler';
import Resizeable from './resizeable';

const CodeCell = () => {
  const [code, setCode] = useState('');
  const [err, setErr] = useState('');
  const [input, setInput] = useState('');

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(input);
      setCode(output.code);
      setErr(output.err);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <Resizeable direction="vertical">
      <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
        <Resizeable direction="horizontal">
          <CodeEditor
            initialValue="console.log('Test');"
            onChange={(value) => setInput(value)}
          />
        </Resizeable>
        <Preview code={code} err={err}/>
      </div>
    </Resizeable>
  );
};

export default CodeCell;
