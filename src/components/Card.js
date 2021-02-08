import React from 'react';
import Planet from '../images/planet.png';

const Card = ( { name }) => {

    return (
            <div className="p-10 bg-white rounded text-center flex flex-col justify-center lg:max-w-md">
                <img className="" alt="planet" src={Planet}/>
                <h2 className="text-3xl lg:text-xl font-bold uppercase font-display">{name}</h2>
            </div>
    );
}

export default Card;