import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ResidentCard = ({ url }) => {

    const [resident, setResident] = useState()

    useEffect(() => {
        axios
            .get(url)
            .then(res => setResident(res.data))
            .catch(err => console.log(err))
    }, [])


    return (
        <article className='resident__card'>
            <header className='resident__header'>
                <div className="resident__container-img">
                    <img src={resident?.image} alt={resident?.name} />
                </div>
                <div className='residen__status'>
                    <span className={`resident__circle ${resident?.status}`}></span>
                    <p className='resident__paragraph'>{resident?.status}</p>
                </div>
            </header>
            <section className='resident__body'>
                <h2 className='resident__title'>{resident?.name}</h2>
                <div className="resident__line"></div>
                <ul className='resident__list'>
                    <li className='resident__item'><h5 className='resident__item-span'>Species </h5><span className='reisdent__item-result'>{resident?.species}</span></li>
                    <li className='resident__item'><h5 className='resident__item-span'>Origin </h5><span className='reisdent__item-result'>{resident?.origin.name}</span></li>
                    <li className='resident__item'><h5 className='resident__item-span'>Episodes where appear </h5><span className='reisdent__item-result'>{resident?.episode.length}</span></li>
                </ul>
            </section>
        </article>
    )
}

export default ResidentCard