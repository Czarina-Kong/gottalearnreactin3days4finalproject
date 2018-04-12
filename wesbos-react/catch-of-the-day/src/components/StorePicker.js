import React from 'react'
import { getFunName } from '../helpers';

class StorePicker extends React.Component{
    // looks for goToStore method and sets itself to itself and binds it to this
    // constructor(){
    //     super()
    //     this.goToStore=this.goToStore.bind(this)
    // }

    goToStore(event){ // add additional method to react component
        event.preventDefault()
        console.log('You changed the url')
        // first grab text from box
        const storeId =this.storeInput.value
        console.log(`going to ${storeId}`) // this does not automatically equal the component 
        // second transition from / to /store/:storeID
        this.context.router.transitionTo(`/store/${storeId}`)
    }

    render(){
        return (
            <form className="store-selector" onSubmit={this.goToStore.bind(this)}> 
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input)=>{this.storeInput=input}} />
                <button type='submit'>Visit Store</button>
                {/*this is how you write comments in JSX*/}
            </form> // JSX--can only every return one parent element
        )
    }
}

StorePicker.contextTypes ={ // tell react taht storepicker comp expects something called router
    router:React.PropTypes.object
}

export default StorePicker