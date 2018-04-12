import React from 'react'
import{formatPrice} from '../helpers'

class Fish extends React.Component{
    render(){
        const {details, index} =this.props
        // check if details.stats =available
        const isAvailable=details.status==='available'
        // if buttontext=isAvailable-- add to order otherwise sold out
        const buttonText=isAvailable ? 'Add To Order' : 'Sold Out!'
        return(
            <li className="menu-fish">
                <img src={details.image} alt={details.name} />
                <h3 className="fish-name">
                    {details.name}
                    <span className="price">{formatPrice(details.price)}</span>
                </h3>
                <p>{details.desc}</p>
                <button onClick={()=>this.props.addToOrder(index)} disabled={!isAvailable}>{buttonText}</button>
            </li>
        )
    }
}

export default Fish