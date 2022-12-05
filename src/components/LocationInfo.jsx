import React from 'react'

const LocationInfo = ({ location }) => {

    return (
        <article className='card__info'>
            <h2 className='card__info-title'>{location?.name}</h2>
            <ul className='card__info-list'>
                <li className='card__info-item'><span>Type: </span>{location?.type
                }</li>
                <li className='card__info-item'><span>Dimension: </span>{location?.dimension}</li>
                <li className='card__info-item'><span>Population: </span>{location?.residents.length}</li>
            </ul>
        </article>
    )
}

export default LocationInfo