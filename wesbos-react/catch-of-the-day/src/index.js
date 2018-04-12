// let's go
// you can code all your script tags for plug-ins here!!
// need a module bundler (webpack) to import all libraries: react/react-dom etc.
// code routing here

import React from 'react' // import everything from react library into React variable
import {render} from 'react-dom' // import render method from react-dom package
import { BrowserRouter, Match, Miss } from 'react-router' // import methods from react-router

import './css/style.css' // take everything inside file and webpack will compile and pop style tag on it
// if you create separate css file for each Component, scope css to single Component
import App from './components/App'
import StorePicker from './components/StorePicker'
import NotFound from './components/NotFound'

const Root = () => {
    return(
        <BrowserRouter>
            <div>
                <Match exactly pattern ="/" component={StorePicker} />
                <Match pattern ="/store/:storeId" component={App} />
                <Miss component={NotFound} />
            </div>
        </BrowserRouter>
    )
}

render(<Root/>, document.querySelector('#main')) // use JSX to render out component

