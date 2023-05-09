function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }
    return (
        <article className="element">
            <button className="element__trash" type="button"></button>
            <div onClick={handleClick} className="element__img-container">
                <img src={props.card.link} alt={props.card.name} className="element__image"/>
            </div>
            <div className="element__sign">
                <h2 className="element__name">{props.card.name}</h2>
                <div className="element__like-container">
                <button className="element__like" type="button"></button>
                <span className="element__like-count">{props.card.likes.length}</span>
                </div>
            </div>
        </article>
)};

export default Card;