import React from "react";

const Details = (props) => {
    const { person } = props;
    return (
        <>
            <h1>First Name: {person.first_name}</h1>
            <h1>Last Name: {person.last_name}</h1>
            <p>Age: {person.age}</p>
            <p>Hair Color: {person.hair} </p>
        </>
        
    );
};

export default Details;