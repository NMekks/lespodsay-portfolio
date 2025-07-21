
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Illustrations from './Illustration';
import Contact from './Contact';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom/cjs/react-router-dom.min';

//TO DEPLOY THE APPLICATIONS AFTER MAKING CHANGES YOU WANT TO PUBLISH ON GITHUB.IO
//GO TO THE DEPLOY BRANCH AND RUN "npm run deploy" THID SHOULD DEPLOY ALL OF YOUR CHANGES
//WHILE STILL BEING ABLE TO MAKE CHANGES LOCALLY WITHOUT CRASHING NEITHER YOUR LOCAL IMAGES NOR THE PUBLISHED WEBSITE

function App() {
  return (
    // <Router>
    <HashRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
          
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
          
          </Switch>
          
        </div>
        <Footer />
      </div>
    </HashRouter>
    
  );
}

export default App;
