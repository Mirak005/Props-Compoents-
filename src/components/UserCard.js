import React from 'react'
import "./UserCard.css"
const UserCard = ({user : {name  , email , lastName}} ) => {

   

    return (
        <div className="user-card">
        <p>Name : {name}</p>
    <p>Last Name : {lastName}</p>
    <p>Email :{email}</p>
      </div>
    )
}

export default UserCard
