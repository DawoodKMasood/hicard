import React from 'react';

// import style from Utilities.css
import './style/Utilities.css';

// import style from Card.css
import './style/Card.css';

const Card = (props) => {
    const { data } = props;

    const numberFormat = (value, currency) =>
    new Intl.NumberFormat('ja-JP', {
        maximumFractionDigits: 0, 
        minimumFractionDigits: 0, 
        style: 'currency',
        currency: currency,
    }).format(value);

    return (
        <div className="container">
            {data.map((item) => (
                <div className="cardContainer" key={item.id}>
                    <a href={item.link}>
                        <img className="cardImage" src={item.image} alt={item.title} />
                    </a>
                    <div className="mx-3 my-3">
                        <div className="cardContent">
                            <div>
                                <h1 className="cardTitle line-clamp-1">
                                    {item.title}
                                </h1>
                                <p className="cardDescription line-clamp-2">
                                    {item.description ? item.description : undefined}
                                </p>
                            </div>
                            <div className="cardPrice">
                                <p className="priceText line-clamp-1">
                                    {numberFormat(item.price.min, item.price.currency)}
                                </p>
                                <span>
                                    -
                                </span>
                                <p className="priceText line-clamp-1">
                                    {numberFormat(item.price.max, item.price.currency)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Card;