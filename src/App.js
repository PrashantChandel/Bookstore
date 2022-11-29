import React, { Component } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { auth, handleUserProfile } from './firebase/utils';
import NavBar from './navigationbar';
import Login from './Pages/Login/login';
import './App.css';
import Registration from './Pages/Registeration/Registeration';
import Recovery from './Pages/Recovery/Recovery';

const initialState = {
  currentUser: null
};

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...initialState
    }
  };
  authListner = null;
  componentDidMount() {
    this.authListner = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        })
      }

      this.setState({
        ...initialState
      });
    });
  }
  componentWillUnmount() {
    this.authListner();
  }
  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <NavBar currentUser={currentUser} />
        <Routes>
          <Route exact path='/login' element={currentUser ? <Navigate to='/' /> : <Login currentUser={currentUser} />} />
          <Route exact path='/register' element={currentUser ? <Navigate to='/' /> : <Registration />} />
          <Route exact path='/recovery' element={<Recovery />} />

        </Routes>
      </div>
    );
  }
};


export default App;
