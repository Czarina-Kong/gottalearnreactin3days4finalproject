// let's go!--you can code all your script tags for plug-ins here!!
// need a module bundler (webpack) to import all libraries: react/react-dom etc.

import React from 'react' // import everything from react library into React variable
import {render} from 'react-dom' // import render method from react-dom package
import './css/style.css' // take everything inside file and webpack will compile and pop style tag on it
// if you create separate css file for each Component, scope css to single Component
import App from './components/App'
import StorePicker from './components/StorePicker'

render(<App/>, document.querySelector('#main')) // use JSX to render out component