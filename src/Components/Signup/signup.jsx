import React, { Component } from 'react';
import './styles.css';
import Buttons from '../forms/Button/button';
import { signInWithGoogle } from './../../firebase/utils';
import Library from '../../content/Library.jpg'
import FormInput from '../forms/Input/input';
import { auth, handleUserProfile } from './../../firebase/utils';

const initalState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    errors: []
};

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initalState
        };
        // this.handleChange = this.handleChange.bind(this)
    }
    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = async e => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            const err = ['Password don\'t match']
            this.setState({
                errors: err
            })
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await handleUserProfile(user, { displayName });
        } catch (err) {
            console.log(err)
        }
        this.setState({
            ...initalState
        });

    }

    render() {
        const { displayName, email, password, confirmPassword, errors } = this.state;
        return (
            <div className="grid place-items-center">
                <div className="signin shadow-xl rounded-xl overflow-hidden bg-white">
                    <div className='topclass grid place-items-center'>
                        <img src={Library} alt="login" className='img' />
                        <span className='heading'>Register</span>
                    </div>
                    <div className="register-wrap">
                        {errors.length > 0 && (
                            <ul>
                                {errors.map((err, pos) => {
                                    return (
                                        <li>
                                            {err}
                                        </li>
                                    )
                                })}
                            </ul>
                        )}
                        <form onSubmit={this.handleFormSubmit}>
                            <FormInput
                                type="text"
                                name="displayName"
                                value={displayName}
                                placeholder="Full Name"
                                onChange={this.handleChange}
                            />
                            <FormInput
                                type="email"
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
                            <FormInput
                                type="password"
                                name="confirmPassword"
                                value={confirmPassword}
                                placeholder="Confirm Password"
                                onChange={this.handleChange}
                            />
                            <div className="socialSignin">
                                <Buttons>
                                    Register
                                </Buttons>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;