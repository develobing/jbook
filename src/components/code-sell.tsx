import React, { useState } from 'react';
import bundle from '../bundler';
import CodeEditor from './code-editor';
import Preview from './preview';

const CodeSell = () => {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const onClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <div>
      <CodeEditor initialValue="" onChange={(value) => setInput(value)} />

      <div>
        <button type="submit" onClick={onClick}>
          Submit
        </button>
      </div>

      <Preview code={code} />
    </div>
  );
};

export default CodeSell;
