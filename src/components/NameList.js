import React from 'react'

function NameList() {
    const names = ['Kemi', 'Faruq', 'Olamide', 'Femi' ]
    let nameList =  names.map(name => <h2 key={name}> {name} </h2>)
    return  <div>{nameList} </div>
//     const persons = [
//         {
//             id: 1,
//             name: 'Kemi',
//             age: 23,
//         },
//         {
//             id: 2,
//             name: 'Shola',
//             age: 24,
//         },
//         {
//             id: 3,
//             name: 'sahid',
//             age: 13,
//         },
//         {
//             id: 4,
//             name: 'sam',
//             age: 18,
//         }
//     ]
//     // Second Approach
//     let personList =  persons.map(person => <h2>I am {person.name}, i am {person.age} years old </h2>)
//   
//   return (
//     <div>
//      {
//         names.map(name => <h2>{name}</h2>)
//      }
//     </div>
//   )
 }
 
export default NameList
