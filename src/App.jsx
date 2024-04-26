import "./App.css";
import { About } from "./components/About.jsx";
import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
  return (
    <>
      <main className="text-gray-400 bg-gray-900 body-font">
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
