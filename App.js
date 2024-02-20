import React from 'react';
import ReactDOM from 'react-dom/client';

//const heading = React.createElement('h1', {id: "heading"}, "Kartik Goel ");

// JSX (transpiled before it reaches the JS) - PARCEL - Babel
const jsxheading = <h1 id="heading">Kartik written in jsx</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);
