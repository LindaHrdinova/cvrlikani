const messagesContent = [
  {
    avatar__src: 'src/assets/avatars/woman1.jpg',
    name: 'Alena Nováková',
    handle: '@novalena',
    time: '2h',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus illum temporibus sit nemo, impedit maxime ipsum numquam laboriosam accusamus eius.',
    likes: 123,
    bookmarkSave: false,
  },
  {
    avatar__src: 'src/assets/avatars/woman2.jpg',
    name: 'Jana Novotná',
    handle: '@janicka',
    time: '1d',
    text: 'Tenhle příspěvek je uložený v záložkách. Temporibus ad nihil molestiae eaque officiis ipsum omnis incidunt voluptas nemo esse saepe cum repellendus.',
    likes: 123,
    bookmarkSave: true,
  },
  {
    avatar__src: 'src/assets/avatars/woman3.jpg',
    name: 'Lenka Skočdopole',
    handle: '@fieldhop',
    time: '1d',
    text: 'Voluptas dolorem quis beatae doloribus nobis eligendi aperiam. Voluptates, deleniti eaque dolore, vitae consequatur, aspernatur reiciendis odio necessitatibus at natus labore.',
    likes: 123,
    bookmarkSave: false,
  },
];

export const Messages = () => {
  return (
    <>
      {messagesContent.map((messContent) => (
        <article className="message">
          <div className="message__avatar">
            <img src={messContent.avatar__src} alt="" />
          </div>
          <div className="message__content">
            <header className="message__header">
              <span className="message__name">{messContent.name}</span>
              <span className="message__handle">{messContent.handle}</span>
              <span className="message__time">{messContent.time}</span>
            </header>
            <div className="message__text">{messContent.text}</div>
            <footer className="message__footer">
              <button className="icon-button icon-button--red">
                <span className="icon-button__icon">
                  <img src="src/assets/icons/heart.svg" alt="Miluju to" />
                </span>
                {messContent.likes}
              </button>
              <button className="icon-button icon-button--blue">
                <span className="icon-button__icon">
                  <img
                    src={
                      messContent.bookmarkSave
                        ? 'src/assets/icons/bookmark-active.svg'
                        : 'src/assets/icons/bookmark.svg'
                    }
                    alt="Uložit do záložek"
                  />
                </span>
                Přidat do záložek
              </button>
              <button className="icon-button icon-button--red">
                <span className="icon-button__icon">
                  <img src="src/assets/icons/trash.svg" alt="Smazat zprávu" />
                </span>
                Smazat zprávu
              </button>
            </footer>
          </div>
        </article>
      ))}
    </>
  );
};
