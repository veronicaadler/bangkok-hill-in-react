function CardDeckItems(props) {
  return (
    <div key={props.key} className="card maincard">
      <img src={props.card.src} className="card-img-top" alt={props.card.alt} />
      <div className="card-body">
        <h5 className="card-title maincardtitle">{props.card.title}</h5>
        <p>{props.card.description}</p>
      </div>
    </div>
  );
}

export default CardDeckItems;
