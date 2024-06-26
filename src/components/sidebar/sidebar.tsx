import './style.css';

export const SideBar: React.FC = () => {
  return (
    <aside className="sidebar">
      <nav className="menu">
        <div className="menu__item menu__logo">
          <a href="#" className="menu__link">
            <img className="menu__icon" src="src/assets/icons/kiwi.svg" />
          </a>
        </div>
        <div className="menu__item">
          <a href="#" className="menu__link">
            <img
              className="menu__icon"
              src="src/assets/icons/house.svg"
              alt="Domů"
            />
            <span className="menu__text">Domů</span>
          </a>
        </div>
        <div className="menu__item">
          <a href="#" className="menu__link">
            <img
              className="menu__icon"
              src="src/assets/icons/bookmark.svg"
              alt="Záložky"
            />
            <span className="menu__text">Záložky</span>
          </a>
        </div>
        <div className="menu__item">
          <a href="#" className="menu__link">
            <img
              className="menu__icon"
              src="src/assets/icons/heart.svg"
              alt="Lajky"
            />
            <span className="menu__text">Lajky</span>
          </a>
        </div>
      </nav>
    </aside>
  );
};
