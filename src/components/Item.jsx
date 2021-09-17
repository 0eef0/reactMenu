import React from 'react'

const Item = ({item}) => {
    const {desc, img, price, title} = item;

    return (
        <div className='foodItem'>
            <div className='foodImg'>
                <img src={img} alt={title} />
            </div>
            <div className='foodInfo'>
                <div>
                    <h5>{title}</h5>
                    <h6>${price}</h6>
                </div>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default Item
