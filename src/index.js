import React from "react";
import ReactDOM from "react-dom";
const HelloWorld = () => {
  return (
    <div>
      <h1>Hello World!</h1> from React App
    </div>
  );
}
ReactDOM.render(
  <HelloWorld />,
  document.getElementById('root')
);