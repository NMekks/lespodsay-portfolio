
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Illustrations from './Illustration';
import Contact from './Contact';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/lespodsay-portfolio/">
              <Home />
            </Route>

            <Route path="/lespodsay-portfolio/about">
              <About />
            </Route>

            <Route path="/lespodsay-portfolio/illustrations">
              <Illustrations />
            </Route>

            <Route path="/lespodsay-portfolio/contact">
              <Contact />
            </Route>

          </Switch>
          
        </div>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
