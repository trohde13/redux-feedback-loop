import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportedForm from '../SupportedForm/SupportedForm';
import CommentForm from '../CommentForm/CommentForm';
import ReviewPage from '../ReviewPage/ReviewPage';
import SuccessPage from '../SuccessPage/SuccessPage';

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <div>
        <nav className="navBox">
            <ul>
              <li><Link to="/">Feeling</Link></li>
              <li><Link to="/understanding">Understanding</Link></li>
              <li><Link to="/supported">Supported</Link></li>
              <li><Link to="/comment">Comment</Link></li>
              <li><Link to="/review">Review</Link></li>
              <li><Link to="/success">Success</Link></li>
            </ul>
          </nav>
        </div>
        <Route path="/" exact component={FeelingForm} />
        <Route path="/understanding" component={UnderstandingForm} />
        <Route path="/supported" component={SupportedForm} />
        <Route path="/comment" component={CommentForm} />
        <Route path="/review" component={ReviewPage} />
        <Route path="/success" component={SuccessPage} />
      </div>
    </Router>
  );
}

export default App;
