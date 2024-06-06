export const Post = () => {
  return (
    <div className="post">
      <form className="post__form">
        <textarea
          name="post-message"
          id="post-message"
          rows="4"
          className="post__message"
          placeholder="Řekni, co se děje?"
        ></textarea>
      </form>
      <div className="post__actions">
        <button className="button">Zacvrlikej to</button>
      </div>
    </div>
  );
};
