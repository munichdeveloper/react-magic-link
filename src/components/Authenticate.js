import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../lib/magic';

const Authenticate = ({ setStatus }) => {
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!email) {
            return;
        }
        try {
            loginUser(email, setStatus)
                .then(() => {
                    navigate('/');
                });
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    return (

        <form onSubmit={handleSubmit} onChange={handleChange} method="post">
            <div className="min-h-screen" style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start"
            }}>

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name="email" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login with email</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Authenticate;