import React from "react"
import CardDeckItems from "./CardDeckItems"
import CardDeckInfo from "../../shared/carddeckinfo"

function CardDeck() {
    const CompiledCardDeck = CardDeckInfo.map(card => <CardDeckItems key={card.id} card={card} />)

    return ( 
        <div class="container-fluid">
        <div class="row p-4 text-center">
            <div class="col">
            <h1 class="regularheadings">RATED #1 IN SOUTHEAST ASIAN CUISINE OF NORTH CENTRAL MA</h1>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="card-deck mb-4 text-center">
                    {CompiledCardDeck}
                </div>
            </div>
        </div>
    </div>
    )
}

export default CardDeck