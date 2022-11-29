import React, { Component } from "react";
import { } from 'react-router-dom'
import FormInput from "../forms/Input/input";
import Button from "../forms/Button/button";
import Library from '../../content/Library.jpg'
import { auth } from "../../firebase/utils";

const initialState = {
    email: '',
    errors: []
}


class Forget extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...initialState
        };
    }
    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }
    handleFormSubmit = async e => {
        e.preventDefault();
        try {
            const { email } = this.state;
            const config = {
                url : 'http://localhost:3000/login'
            }
            await auth.sendPasswordResetEmail(email,config)
                .then(() => {
                    console.log("Password Reset")
                })
                .catch(() => {
                    // console.log(err)
                    const err = ['Email not found. Please try again'];
                    this.setState({
                        errors: err 
                    });
                })
        } catch (err) {
            // console.log(err)
        }
    }


    render() {
        const { email,errors } = this.state;
        return (
            <div className="grid place-items-center">
                <div className="signin shadow-xl rounded-xl overflow-hidden bg-white">
                    <div className='topclass grid place-items-center'>
                        <img src={Library} alt="login" className='img' />
                        <span className='heading'>Forget Password</span>
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
                                type="email"
                                name="email"
                                value={email}
                                placeholder="Email"
                                onChange={this.handleChange}
                            />
                            <div className="socialSignin">
                                <Button type='submit'>
                                    Forget
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Forget;
