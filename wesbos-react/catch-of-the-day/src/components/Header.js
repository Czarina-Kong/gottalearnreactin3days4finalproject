import React from 'react'

// class Header extends React.Component{
//     render(){
//         return(
//             <header className='top'>
//                 <h1>
//                     Catch
//                     <span className="ofThe">
//                         <span className="of">of</span>
//                         <span className="the">the</span>
//                     </span>
//                     Day
//                 </h1>
//                 <h3 className="tagline"><span>{this.props.tagline}</span></h3>
//                 {/*one set of curly brackets in JSX inserts variables*/}
//             </header>
//         )
//     }
// }
// 
// Let's make the above code, a Stateless Functional Component
// if you don't need other methods other than render (like render HTML to DOM), use SFC
// 

const Header=(props)=>{
    return(
        <header className='top'>
            <h1>
                Catch
                <span className="ofThe">
                    <span className="of">of</span>
                    <span className="the">the</span>
                </span>
                Day
            </h1>
            <h3 className="tagline"><span>{props.tagline}</span></h3>
            {/*one set of curly brackets in JSX inserts variables*/}
        </header>
    )
}


export default Header