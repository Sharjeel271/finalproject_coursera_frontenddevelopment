import React from "react";

function Card(props) {


    return (
        <section className={props.styling}>
            <div><img src={props.data.image}/></div>
            <h3>{props.data.name}</h3>
            <h3>{props.data.value}</h3>
            <p>{props.data.description}</p>
        </section>
    )
}

export default Card;