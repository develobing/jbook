import 'bulmaswatch/superhero/bulmaswatch.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import CodeSell from './components/code-sell';

const App = () => {
  return (
    <div>
      <CodeSell />
      <CodeSell />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
