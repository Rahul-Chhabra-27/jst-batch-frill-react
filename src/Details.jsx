import React from 'react';
import { useParams } from 'react-router-dom';

const Details = (props) => {
    console.log("hello")
    const { id } = useParams();

    return <h1>Hi! Pet {id}</h1>
}

export default Details;