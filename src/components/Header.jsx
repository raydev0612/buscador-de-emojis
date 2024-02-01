const Header = ({ darkMode }) => {
  return (
    <header className={`hero ${darkMode ? "hero-dark" : ""}`}>
      <h2>Buscador de Emojis 🤔</h2>
      <h3>Busca tu emoji favorito...</h3>
    </header>
  );
};

export default Header;
