import React from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'

class App extends React.Component{
    constructor(){
        super()
        this.addFish = this.addFish.bind(this)
        //getinitialstate
        this.state={
            fishes: {},
            order:{}
        }
    }
    addFish(fish){
        //update our state
        //... is a 'spread' and takes every item in object and spread into this object
        const fishes={...this.state.fishes}
        // add in our new fish
        const timestamp=Date.now()
        fishes[`fish-${timestamp}`]=fish
        //set state
        this.setState({fishes})
    }
    render(){
        return(
            <div className="catch-of-the-day">
                <div className='menu'> 
                    {/*if you want to pass information to a tag, pass it via Props*/}
                    <Header tagline="Fresh Seafood Restaurant" />
                </div>
                <Order />
                <Inventory addFish={this.addFish} />
            </div>
        )
    }
}

export default App