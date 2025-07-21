
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Illustrations from './Illustration';
import Contact from './Contact';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { HashRouter, Routes} from 'react-router-dom';

function App() {
  return (
    // <Router>
    <HashRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* <Switch> */}
          <Routes>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/illustrations">
              <Illustrations />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>
          </Routes>
          {/* </Switch> */}
          
        </div>
        <Footer />
      </div>
    </HashRouter>
    
  );
}

export default App;
