/* eslint-disable react/prop-types */
import { useState } from "react";

const Form = ({ setValueEmoji, toggleDarkMode, darkMode }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const allEmojis = () => {
    setValueEmoji("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (value === "") {
      setError(true);
      setTimeout(() => setError(false), 2000);
      return;
    }
    setValueEmoji(value);
    console.log(value);
  };
  return (
    <section className={`form ${darkMode ? "dark-mode" : ""}`}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="alguna palabra emoji..."
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="button" onClick={allEmojis}>
          Todos
        </button>
        <div className="toggle-box" onClick={toggleDarkMode}>
          <div className="toggle-circle"></div>
        </div>
        <span>Oscuro/Claro</span>
      </form>
      {error && <p className="error">La entrada está vacía</p>}
    </section>
  );
};

export default Form;
