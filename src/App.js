import Contact from "./components/Contact/Contact";
import Navar from "./components/Navar/Navar";
import Footer from "./components/footer/Footer";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/Skills";
import Works from "./components/works/Works";


function App() {
  return (
    <div className="App">
<Navar></Navar>
<Intro></Intro>
<Skills></Skills>
<Works></Works>
<Contact></Contact>
<Footer></Footer>
    </div>
  );
}

export default App;
