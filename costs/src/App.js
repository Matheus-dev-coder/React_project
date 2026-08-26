import {BrowserRouter as Router, Switch, Routes, Link} from 'react-router-dom';
import Home from './pages/Home';
import Company from './pages/Company';
import Contato from './pages/Contact';
import Nemproject from './pages/Nemproject';

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
            <Route exact path="/company">
              <Company />
            </Route>
            <Route exact path="/contato">
              <Contato />
            </Route>
            <Route exact path="/nemproject">
              <Nemproject />
            </Route>
          </Container>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
