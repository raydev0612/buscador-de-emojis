import { useState } from "react";

const Item = ({ title, emoji, darkMode }) => {
  const [copy, setCopy] = useState(false);
  const handleCopy = () => {
    setCopy(true);
    navigator.clipboard.writeText(emoji);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };

  return (
    <article className={`card-emoji ${darkMode ? "dark-mode" : ""}`}>
      <p onClick={handleCopy} className="emoji-icon">
        {emoji}
      </p>
      <h4>{title}</h4>
      {copy && <p className="copied">Copiado!</p>}
    </article>
  );
};

export default Item;
