import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CreateAccount from "./pages/createAccount";
import Login from './pages/login';
import SecureAccount from "./pages/secureAccount";
import Verification from "./pages/verification";
import Dashboard from './pages/dashboard';
import './scss/Main.scss';


interface PageProps {
    contained: string,
    placeholder: string,
}
function App() {
  return (
        <Router>         
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/verify" component={Verification} />
            <Route exact path="/create-account" component={CreateAccount} />
            <Route exact path="/secure-account" component={SecureAccount} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Router> 
  );
}

export default App;
