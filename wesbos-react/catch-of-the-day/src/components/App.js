import React from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'

class App extends React.Component{
    render(){
        return(
            <div className="catch-of-the-day">
                <div className='menu'> 
                    {/*if you want to pass information to a tag, pass it via Props*/}
                    <Header tagline="Fresh Seafood Restaurant" />
                </div>
                <Order />
                <Inventory />
            </div>
        )
    }
}

export default App