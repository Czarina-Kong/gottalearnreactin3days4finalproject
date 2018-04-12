import React from 'react'

class StorePicker extends React.Component{
    render(){
        return (
            <form className="store-selector"> 
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name" />
                <button type='submit'>Visit Store</button>
                {/*this is how you write comments in JSX*/}
            </form> // JSX--can only every return one parent element
        )
    }
}

export default StorePicker