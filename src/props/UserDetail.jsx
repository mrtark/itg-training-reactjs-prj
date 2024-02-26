import React from 'react'

//function UserDetail({name, surname, age},props) {   *her ikisi birlikte çarılabilir
//function UserDetail(props) { const {name, surname, age} = props   *props. şeklinde çağrımdan kurtulmak için

function UserDetail({name, surname, age}) {
    return (
        <>
         <h1>Name: {name}</h1>
         <h1>Surname: {surname}</h1>
         <h1>Age: {age}</h1>

        </>
    )
}

export default UserDetail
