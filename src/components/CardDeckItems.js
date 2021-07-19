import React from "react"

function CardDeckItems(props) {

    return (
        <div class="card">
            <img src={props.card.src}
                class="card-img-top" alt={props.card.alt} />
            <div class="card-body">
                <h5 class="card-title">{props.card.title}</h5>
                <p>{props.card.description}</p>
            </div>
        </div>
    )
}

export default CardDeckItems