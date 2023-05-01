import logo from './images/mesto_logo.svg'
function App() {
  return (
    <div className="page">

    <header class="header">
      <img src={logo} alt="логотип" className="header__logo"/>
    </header>
    <main className="content">
      <section className="profile">
        <div className="profile__cover">
          <img src="#" alt="аватар" className="profile__avatar"/>
          <div className="profile__avatar-overlay"></div>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <button className="profile__edit" type="button"></button>
          <p className="profile__job">Исследователь океана</p>
        </div>
        <button className="profile__add" type="button"></button>
      </section>
      <section className="elements">
      </section>
    </main>
    <footer className="footer">
      <p className="footer__copyright">© 2023 Mesto Russia</p>
    </footer>
    <div className="popup popup_edit-profile">
      <div className="popup__container">
        <h3 className="popup__title">Редактировать профиль</h3>
        <form id="change-data" action="#" className="popup__form" name="data_change" novalidate>
          <input type="text" className="popup__input popup__input_form_name" id="name-input" name="name" placeholder="Имя" minlength="2" maxlength="40" required/>
          <span className='popup__error name-input-error'></span>
          <input type="text" className="popup__input popup__input_form_job" id="job-input" name="job" placeholder="Вид деятельности" minlength="2" maxlength="200" required/>
          <span className='popup__error job-input-error'></span>
          <button className="popup__button" type="submit">Сохранить</button>
        </form>
        <button className="popup__close" type="button"></button>
      </div>
    </div>
    <div className="popup popup_add-card">
      <div className="popup__container">
        <h3 className="popup__title">Новое место</h3>
        <form id="add-card" action="#" className="popup__form" name="data_change">
          <input type="text" className="popup__input popup__input_form_place" id="place-input" name="place" placeholder="Название" minlength="2" maxlength="30" required/>
          <span className='popup__error place-input-error'></span>
          <input type="url" className="popup__input popup__input_form_src" id="src-input" name="src" placeholder="Ссылка на картинку" required/>
          <span className='popup__error src-input-error'></span>
          <button className="popup__button" type="submit">Сохранить</button>
        </form>
        <button className="popup__close" type="button"></button>
      </div>
    </div>


    <div className="popup popup_change-avatar">
      <div className="popup__container">
        <h3 className="popup__title">Обновить аватар</h3>
        <form id="change-avatar" action="#" className="popup__form" name="avatar_change">
          <input type="url" className="popup__input popup__input_form_avatar" id="avatar-input" name="src" placeholder="Ссылка на фото" required/>
          <span className='popup__error avatar-input-error'></span>
          <button className="popup__button" type="submit">Сохранить</button>
        </form>
        <button className="popup__close" type="button"></button>
      </div>
    </div>


    <div className="popup popup_image">
      <div className="popup__figure">
        <img src="#" alt="#" className="popup__photo"/>
        <h2 className="popup__text">#</h2>
        <button className="popup__close" type="button"></button>
      </div>
    </div>
    <div className="popup popup_delete-image">
      <div className="popup__container">
        <h3 className="popup__title">Вы уверены?</h3>
        <form className="popup__form">
          <button className="popup__button" type="submit">Да</button>
        </form>

        <button className="popup__close" type="button"></button>
      </div>
    </div>
    <template id="card">
      <article className="element">
        <button className="element__trash" type="button"></button>
        <div className="element__img-container">
          <img src="#" alt="#" className="element__image"/>
        </div>
        <div className="element__sign">
          <h2 className="element__name">#</h2>
          <div className="element__like-container">
            <button className="element__like" type="button"></button>
            <span className="element__like-count">6</span>
          </div>
        </div>
      </article>
    </template>
  </div>
  );
}

export default App;
