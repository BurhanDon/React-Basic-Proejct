import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/EXAMPLES.JSX";

function App() {
  // console.log("APP COMPONENT EXECUTING");

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
      <p id="app-p">
      Developed by
        <a target="_blank" href="https://www.linkedin.com/in/burhan-siraj/">
          {" "}
          Burhan Uddin
        </a>
      </p>
    </>
  );
}

export default App;
