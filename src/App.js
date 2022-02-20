import logo from './logo.svg';
import './App.css';
import Section from './components/section';

/**
 * Sandbox Scratch JS
 */
// Dependencies
import set from "lodash/set";
// Import JSON
import shortcutsJson from "./shortcuts.json";
// Create an object to hold the keyboard shortcuts.
const shortcutsObj = {};
// Convert JSON dot notation to JS object.
for (const key in shortcutsJson) {
  if (shortcutsJson.hasOwnProperty(key)) {
    set(shortcutsObj, key, shortcutsJson[key]);
  }
}
// console.log(shortcutsObj);

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <img src={logo} className="App__logo" alt="logo" />
        <h1>Header</h1>
      </header>
      <Section shortcutGroups={shortcutsObj} />
      <footer className="App-footer">
        Footer
      </footer>
    </div>
  );
}

export default App;
