import React from "react";

const Main = (props) => {
    const { title, category, imageSrc } = props;

    return (
        <div className="main">
            <p className="number">{category}</p>
            <img src={imageSrc} className="img-bottom" alt={category} />
            <h5 className="card-title">{title}</h5>
        </div>
    );
}

export default Main;