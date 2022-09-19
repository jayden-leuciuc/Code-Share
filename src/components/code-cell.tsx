import { useState } from 'react';
import CodeEditor from './code-editor';
import Preview from './preview';
import bundle from '../bundler';
import Resizeable from './resizeable';

const CodeCell = () => {
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');

  const onClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <Resizeable direction="vertical">
      <div style={{height: '100%', display: 'flex', flexDirection: 'row'}}>
        <CodeEditor
          initialValue="console.log('Test');"
          onChange={(value) => setInput(value)}
        />
        <Preview code={code} />
      </div>
    </Resizeable>
  );
};

export default CodeCell;
