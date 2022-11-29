import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import Buttons from '../forms/Button/button';
import { auth, signInWithGoogle } from './../../firebase/utils';
import Library from '../../content/Library.jpg'
import FormInput from '../forms/Input/input';

const initalState = {
    email: '',
    password: ''
};
class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...initalState
        }
    };
    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }
    handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState(initalState)
        }
        catch (err) {
            //console.log(err);
        }
    }

    render() {
        const { email, password } = this.state;
        return (
            <div className="grid place-items-center">
                <div className="signin shadow-xl rounded-xl overflow-hidden bg-white">
                    <div className='topclass grid place-items-center'>
                        <img src={Library} alt="login" className='img' />
                        <span className='heading'>LogIn</span>
                    </div>
                    <div className="wrap">
                        <form onSubmit={this.handleSubmit}>
                            <FormInput
                                type="text"
                                name="email"
                                value={email}
                                placeholder="Email"
                                onChange={this.handleChange}
                            />
                            <FormInput
                                type="password"
                                name="password"
                                value={password}
                                placeholder="Password"
                                onChange={this.handleChange}
                            />
                            <Buttons type="submit">
                                Login
                            </Buttons>
                            <div className='px-2 pb-1'>
                                <Link to="/recovery">Forget Password </Link>
                                |
                                <Link to="/register"> Register New User</Link>
                                
                            </div>
                            <hr />
                            <div className="socialSignin">
                                <Buttons onClick={signInWithGoogle}>
                                    Sign in with Google
                                </Buttons>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;