import CardDeckItems from "./CardDeckItems";
import CardDeckInfo from "../../shared/carddeckinfo";

function CardDeck() {
  const CompiledCardDeck = CardDeckInfo.map((card) => (
    <CardDeckItems key={card.id} card={card} />
  ));

  return (
    <div className="container-fluid">
      <div className="row p-4 text-center">
        <div className="col">
          <h1 className="regularheadings">
            RATED #1 IN SOUTHEAST ASIAN CUISINE OF NORTH CENTRAL MA
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card-deck mb-4 text-center">{CompiledCardDeck}</div>
        </div>
      </div>
    </div>
  );
}

export default CardDeck;
