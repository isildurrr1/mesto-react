import React from "react";
import Card from "./Card";
import { api } from "../utils/api";

function Main(props) {
    const[userName, setUserName] = React.useState('');
    const [userDescription , setUserDescription ] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');

    React.useEffect(() => {
        api.getProfileInfo()
            .then((result) => {
                setUserName(result.name);
                setUserDescription(result.about);
                setUserAvatar(result.avatar);
            })
            .catch((err) => {
                console.log(err);
            });
    },[]);

    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getInitialCards()
            .then((result) => {
                setCards(result);
            })
            .catch((err) => {
                console.log(err);
            });
    },[]);

    return (
      <main className="content">
        <section className="profile">
          <div className="profile__cover" >
            <img src={userAvatar} alt="аватар" className="profile__avatar"/>
            <div  onClick={props.onEditAvatar} className="profile__avatar-overlay"></div>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button onClick={props.onEditProfile} className="profile__edit" type="button"></button>
            <p className="profile__job">{userDescription}</p>
          </div>
          <button onClick={props.onAddPlace} className="profile__add" type="button"></button>
        </section>
        <section className="elements">
            {cards.map((card) => (
                <Card key={card._id} card={card} onCardClick={props.onCardClick}/>
            ))}
        </section>
      </main>
    );
  }
  
  export default Main;