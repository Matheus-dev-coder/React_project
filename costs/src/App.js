import {BrowserRouter as Router, Switch, Routes, Link} from 'react-router-dom';
import Home from './pages/Home';
import Company from './pages/Company';
import Contato from './pages/Contact';
import Nemproject from './pages/Nemproject';

import Container from './layout/Container';

function App() {
  return (
    <Router> 
      <div>
        <Link to="/">Home</Link>
        <Link to="/company">Company</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/nemproject">Nemproject</Link>
      </div>
      <Switch>
          <Container>
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
      <p>Footer</p>
    </Router>
  );
}

export default App;
