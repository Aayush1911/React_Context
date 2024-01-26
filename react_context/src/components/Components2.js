import React, { useContext } from 'react'
import { firstname, lastname } from '../App'

function Components2() {
    const fname=useContext(firstname)
    const lname=useContext(lastname)
  return (
    <div>
        <h1>Hello my self {fname} {lname}</h1>
    </div>
  )
}

export default Components2