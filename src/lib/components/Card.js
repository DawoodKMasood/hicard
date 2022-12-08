import React from 'react';

// import style from Utilities.css
import './style/Utilities.css';

// import style from Card.css
import './style/Card.css';

const Card = (props) => {
    const { data } = props;

    return (
        <div className="container">
            {data.map((item) => (
                <div className="cardContainer" key={item.id}>
                    <a href={item.link}>
                        <picture>
                            <img className="cardImage" src={item.image} alt={item.title} />
                        </picture>
                    </a>
                    <div className="cardContent">
                        <div>
                            <h1 className="cardTitle line-clamp-1">
                                {item.title}
                            </h1>
                            <p className="cardDescription line-clamp-2">
                                {item.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Card;