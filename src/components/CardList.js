import React from 'react';
import Card from '../components/Card';

const CardList = ({ planets }) => {
    return (
        <div className="bg-gradient-to-t from-purple-200 pb-10">
            <h2 className="text-white text-4xl text-center p-8 font-bold uppercase">Planets</h2>
                <div className="grid gap-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
                    {
                        planets.map((item, i) => {
                            return (
                                <Card 
                                    key={i} 
                                    name={planets[i].name} 
                                />
                            );
                        })
                    }   
                </div>   
        </div>
    );
}

export default CardList;