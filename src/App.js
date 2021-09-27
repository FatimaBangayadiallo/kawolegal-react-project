
import './App.css';
import Home from './compo/Home.jsx';
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import Login from './compo/Login.jsx';
import Register from './compo/Register.jsx';
import Startup from './compo/Startups.jsx';

function App() {
  return (
    <div className="App">
     <Router>
      <Route path="/" exact={true} component={Home} />
     <Route path="/startups" exact={true} component={Startup} />
     <Route path="/register" exact={true} component={Register} />
     <Route path="/login" exact={true} component={Login} />


     </Router>


    </div>
  );
}

export default App;
