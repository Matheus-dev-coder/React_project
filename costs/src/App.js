import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Company from './pages/Company';
import Contato from './pages/Contact';
import NewProject from './pages/NewProject';
import Projects from './pages/Projects';
import Project from './pages/Project';

import Container from './layout/Container';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

function App() {
  return (
    <Router> 
      <Navbar />
      <Switch>
          <Container customClass="min-height">
            <Route exact path="/">
              <Home />
            </Route>
             <Route exact path="/Projects">
              <Projects />
            </Route>
            <Route  path="/company">
              <Company />
            </Route>
            <Route  path="/contato">
              <Contato />
            </Route>
            <Route  path="/newproject">
              <NewProject />
            </Route>
            <Route  path="/project/:id">
              <Project />
            </Route>
          </Container>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
