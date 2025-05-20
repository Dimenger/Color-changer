import { getRandomColor } from "../src/assets/utils";
import styles from "./App.module.css";

function App() {
  function colorChanger() {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
  }

  return (
    <>
      <div>
        <button className={styles.button} onClick={colorChanger}>
          Color changer
        </button>
      </div>
    </>
  );
}

export default App;
