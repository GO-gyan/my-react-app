import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const HelloWorld = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <App />
    </div>
  );
}

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('root')
);