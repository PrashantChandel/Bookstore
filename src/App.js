import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { auth } from './firebase/utils';
import NavBar from './navigationbar';
import Login from './login';
import './App.css';

const initialState = {
  currentUser : null
};

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      ...initialState
    };
  }
  authListner = null;
  componentDidMount(){
    this.authListner = auth.onAuthStateChanged(userAuth => {
      if(!userAuth) return;
      
      this.setState({
        currentUser : userAuth
      });
      
    });
  }
  componentWillUnmount(){
    this.authListner();
  }
  render() {
    return (
      <div>
        <NavBar />
        <Routes>
          <Route path='/register' element={<NavBar />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    );
  }
}

export default App;
