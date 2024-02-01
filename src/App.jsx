import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Result from "./components/Result";

function App() {
  const [valueEmoji, setValueEmoji] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((current) => !current);
  };

  return (
    <div className={`App ${darkMode ? "darkbg" : ""}`}>
      <Header darkMode={darkMode} />
      <Form
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        setValueEmoji={setValueEmoji}
      />
      <Result darkMode={darkMode} valueEmoji={valueEmoji} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
