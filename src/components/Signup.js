// Imports
import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Signup = () => {
    const { name, setName } = useState('');
    const { email, setEmail } = useState('');
    const { password, setPassword } = useState('');
    const { confirmPassword, setConfirmPassword } = useState('');
    const { redirect, setRedirect } = useState(false);

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleConfirmPasword = (e) => {
        setConfirmPasword(e.target.value)
    }

    const handleSubmit = (e) => {
        console.log(`you have submitted a form`)
    }

    return (
        <div className="row mt-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">
                    <h2 className="py-2">Signup</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" value={name} onChange={handleName} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email"></label>
                            <input type="email" name="email" value={email} onChange={handleEmail} className="form-control"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password"></label>
                            <input type="password" name="password" value={password} onChange={handlePassword} className="form-control"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword"></label>
                            <input type="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPasword} className="form-control"></input>
                        </div>
                        <input type="submit" value="submit" className="btn btn-primary float-right" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;
