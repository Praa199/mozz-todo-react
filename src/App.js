import logo from "./logo.svg";
import "./App.css";

function App(props) {
  const subject = props.subject;
  console.log(props);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* subject is inherited through props */}
          Hello {subject}!
        </p>
      </header>
    </div>
  );
}

export default App;
