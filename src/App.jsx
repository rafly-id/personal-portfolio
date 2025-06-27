// App.jsx
import Nav from "./components/Nav";
import Home from "./components/Home";

const App = () => (
  <>
    <Nav />
    <section id="wrapper-smooth">
      <div id="content-smooth">
        <Home />
      </div>
    </section>
  </>
);

export default App;
