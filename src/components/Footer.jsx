const Footer = ({ darkMode }) => {
  return (
    <footer className={`${darkMode ? "footer-dark" : ""}`}>
      <h4>Footer</h4>
    </footer>
  );
};

export default Footer;
