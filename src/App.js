import "./App.css";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Result from "./components/Result/Result";
import TextPreview from "./components/TextPreview/TextPreview";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <TextPreview />
        <Input />
      </main>
      <Footer />
      <Result />
    </div>
  );
}

export default App;
