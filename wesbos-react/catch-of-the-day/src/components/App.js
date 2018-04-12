import React from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import Fish from './Fish'
import sampleFishes from "../sample-fishes"

class App extends React.Component{
    constructor(){
        super()
        this.addFish = this.addFish.bind(this)
        this.loadSamples = this.loadSamples.bind(this)        
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
    loadSamples(){
        this.setState({
            fishes: sampleFishes
        })
    }
    render(){
        return(
            <div className="catch-of-the-day">
                <div className='menu'> 
                    {/*if you want to pass information to a tag, pass it via Props*/}
                    <Header tagline="Fresh Seafood Restaurant" />
                    <ul className='list-of-fishes'>
                        {
                            Object
                                .keys(this.state.fishes)
                                .map(key=><Fish key={key} details={this.state.fishes[key]} />)
                        }
                    </ul>
                </div>
                <Order />
                <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
            </div>
        )
    }
}

export default App