import logo from "./logo.svg";
import "./App.css";
import * as AssetsService from "./services/assets-service";
import { DateTime } from 'luxon'

function App() {
  return (
    <div className="App">
      <div>{DateTime.now().toISO()}</div>
      {/* <header className="App-header">
        <img
          src={AssetsService.getResourceURL(logo)}
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
