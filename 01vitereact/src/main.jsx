import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp() {
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}
/*
const ReactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  Children: "click me to visit google",
};
*/

const AnotherElement = (
  <a href="https://www.google.com" target='_blank'>Visit Google</a>
)

const reactElement = React.createElement(
  'a',
  {
    href: "https://www.google.com",
    target: '_blank'
  },
  'click me!'
)

createRoot(document.getElementById("root")).render(reactElement);
