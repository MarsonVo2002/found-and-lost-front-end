import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/'></Route>
          <Route path='/login'></Route>
          <Route path='/registration'></Route>
          <Route path='/lost-item-form'></Route>
          <Route path="/found-item-form"></Route>
          <Route path='/profile'></Route>
          <Route path="/my-lost-items"></Route>
          <Route path='/my-recent-posts'></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
