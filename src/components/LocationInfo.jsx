import React from 'react'

const LocationInfo = ({ location }) => {
    return (
        <article className='location__card'>
            <ul className='location__list'>
                <div className="location__content-items">
                    <li className='location__item'><strong className='location__properti'>Name: </strong> {location?.name}</li>
                    <li className='location__item'><strong className='location__properti'>Type: </strong>{location?.type}</li>
                </div>
                <div className="location__content-items">
                    <li className='location__item'><strong className='location__properti'>Dimension: </strong>{location?.dimension}</li>
                    <li className='location__item'><strong className='location__properti'>Residentes: </strong>{location?.residents.length}</li>
                </div>
            </ul>
        </article>
    )
}

export default LocationInfo