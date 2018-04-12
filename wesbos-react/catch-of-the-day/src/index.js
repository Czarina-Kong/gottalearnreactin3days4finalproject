// let's go!--you can code all your script tags for plug-ins here!!
// need a module bundler (webpack) to import all libraries: react/react-dom etc.

import React from 'react' // import everything from react library into React variable
import {render} from 'react-dom' // import render method from react-dom package

import StorePicker from './components/StorePicker'

render(<StorePicker/>, document.querySelector('#main')) // use JSX to render out component