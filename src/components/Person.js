import React from 'react'

function Person({person}) {
  return (
    <div>
        {/* coming from NameList.js */}
 <h2>
    I am {person.name}, i am {person.age} years old 
    </h2>
    </div>
  )
}

export default Person
