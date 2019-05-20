import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Content, Sider, Nav, Footer } from './layouts';
import './App.scss';
import GoogleOAuthCallBack from './services/login/GoogleOAuthCallBack';
import Login from './services/login/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/callback" component={GoogleOAuthCallBack} />
          <Header />
          <div className="App-content-region">
            <Nav />
            <Content />
            <Sider />
          </div>
          <Footer />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
