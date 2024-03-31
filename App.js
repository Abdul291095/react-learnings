import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 id="heading"> Hello from JSX</h1>;

const Component = () => (
  <div>
    <Title />
    <h1 id="head">Hello from Component</h1>
  </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Component />);
