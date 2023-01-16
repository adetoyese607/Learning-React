import React from 'react'

// function Carry() {
//     return <h3>Hello Vilaryies</h3>
// }

// const Carry = props => {
//     console.log(props)
// return(
    
// <div>
// <h2>Hello {props.name} we called him {props.heroname}</h2>
// {props.children}
// </div>
// ) 
// }


// Destruturing in the parameter()
// const Carry = ({name, heroname}) => {
//    return <h2>Hello {name} we called him {heroname}</h2>
// }

// Destruturing in the function body
const Carry = (props) => {
    const {name, heroname} = props
    return (
        <h2>Hello {name} we called him {heroname}</h2>
    )
 }
export default Carry