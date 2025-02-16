import "./App.css";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Result from "./components/Result/Result";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Content />
      </main>
      <Footer />
      <Result />
    </div>
  );
}

export default App;
