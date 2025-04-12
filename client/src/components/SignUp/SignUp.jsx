import React, { useState } from 'react';
import './SignUp.css';
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        email: '',
        username: '',
        password: ''
    });

    const [loading, setLoading] = useState(false);

    const signupHandleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    }

    const validateInputs = () => {
        if (!inputs.username || !inputs.email || !inputs.password) {
            toast.error("All fields are required!", {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                style: {
                    border: "2px solid red",
                    backgroundColor: "#fff",
                    color: "red",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)"
                }
            });
            return false;
        }
        return true;
    }

    const signupSubmit = async (e) => {
        e.preventDefault();

        if (!validateInputs()) {
            return;
        }

        setLoading(true); // start loading

        try {
            const res = await axios.post('http://localhost:8000/api/v1/register', inputs);

            if (res.data.message === "User already exists!!") {
                toast.error(res.data.message, {
                    position: "top-right",
                    autoClose: 2500,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    style: {
                        border: "2px solid red",
                        backgroundColor: "#fff",
                        color: "red",
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)"
                    }
                });
            } else {
                setInputs({
                    email: '',
                    username: '',
                    password: ''
                });

                toast.success(res.data.message, {
                    position: "top-right",
                    autoClose: 2500,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    style: {
                        border: "2px solid green",
                        backgroundColor: "#fff",
                        color: "green",
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)"
                    }
                });

                setTimeout(() => navigate('/login'), 1500);
            }
        } catch (error) {
            console.error("Signup error:", error.message);

            toast.error("Something went wrong! Please try again later.", {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                style: {
                    border: "2px solid red",
                    backgroundColor: "#fff",
                    color: "red",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)"
                }
            });
        } finally {
            setLoading(false); // stop loading
        }
    }

    return (
        <div className='sign-up'>
            <div className='container text-white text-center'>
                <div className='row sign-up-container'>
                    <div className='sign-up-left col-lg-6 d-flex justify-content-center align-items-center'>
                        <img src="https://i.ibb.co/nDyJcKx/Mobile-login-bro.png" alt="SignUp Img" />
                    </div>
                    <div className='sign-up-right col-lg-6 d-flex justify-content-center align-items-center gap-4'>
                        <form onSubmit={signupSubmit} className='input-group'>
                            <div className='sign-up-input'>
                                <IoPerson className="react-icons" />
                                <input
                                    type='text'
                                    name='username'
                                    placeholder='Username'
                                    onChange={signupHandleChange}
                                    value={inputs.username}
                                />
                            </div>
                            <div className='sign-up-input'>
                                <MdEmail className="react-icons" />
                                <input
                                    type='email'
                                    name='email'
                                    placeholder='Email'
                                    onChange={signupHandleChange}
                                    value={inputs.email}
                                />
                            </div>
                            <div className='sign-up-input'>
                                <FaLock className="react-icons" />
                                <input
                                    type='password'
                                    name='password'
                                    placeholder='Password'
                                    onChange={signupHandleChange}
                                    value={inputs.password}
                                />
                            </div>

                            <div className='signupBtn'>
                                <Button
                                    btnText={loading ? "Processing..." : "Sign Up"}
                                    btnTextWeight="600"
                                    btnTextColor="black"
                                    btnTextSpacing="0.5px"
                                    btnBgColor="white"
                                    btnBorder="none"
                                    btnOutline="none"
                                    btnPadding="10px 30px"
                                    btnBorderRadius="50px"
                                    btnHoverShadow="0 20px 60px rgba(0, 0, 0, 0.4)"
                                    btnTransition=".3s"
                                    type="submit"
                                    disabled={loading}
                                />
                            </div>
                        </form>
                        <p>Have an account? <Link to='/login'>Log In</Link> here.</p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;
