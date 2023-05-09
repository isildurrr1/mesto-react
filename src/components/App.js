import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import React from "react";

function App() {
  const[isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const[isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const[isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const[selectedCard, setSelectedCard] = React.useState({})

  function handleEditProfileClick() {setIsEditProfilePopupOpen(true)};
  function handleAddPlaceClick() {setIsAddPlacePopupOpen(true)};
  function handleEditAvatarClick() {setIsEditAvatarPopupOpen(true)};
  function handleCardClick(card) {setSelectedCard(card)}

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <Header />

      <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <PopupWithForm name='edit-profile' title='Редактировать профиль' buttonText='Сохранить' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <input type="text" className="popup__input popup__input_form_name" id="name-input" name="name" placeholder="Имя" minLength="2" maxLength="40" required/>
        <span className='popup__error name-input-error'></span>
        <input type="text" className="popup__input popup__input_form_job" id="job-input" name="job" placeholder="Вид деятельности" minLength="2" maxLength="200" required/>
        <span className='popup__error job-input-error'></span>
      </PopupWithForm>

      <PopupWithForm name='add-card' title='Новое место' buttonText='Сохранить' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input type="text" className="popup__input popup__input_form_place" id="place-input" name="place" placeholder="Название" minLength="2" maxLength="30" required/>
        <span className='popup__error place-input-error'></span>
        <input type="url" className="popup__input popup__input_form_src" id="src-input" name="src" placeholder="Ссылка на картинку" required/>
        <span className='popup__error src-input-error'></span>
      </PopupWithForm>

      <PopupWithForm name='change-avatar' title='Обновить аватар' buttonText='Сохранить' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input type="url" className="popup__input popup__input_form_avatar" id="avatar-input" name="src" placeholder="Ссылка на фото" required/>
        <span className='popup__error avatar-input-error'></span>
      </PopupWithForm>

      <PopupWithForm name='delete-image' title='Вы уверены?' buttonText='Да'/>

      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      
  </div>
  );
}

export default App;
