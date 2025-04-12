import React, { useState } from 'react';
import './LogIn.css';
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import Button from '../Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LogIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });

    const [loading, setLoading] = useState(false);

    const loginHandleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    }

    const loginSubmit = async (e) => {
        e.preventDefault();

        if (!inputs.email || !inputs.password) {
            toast.error("Please enter both email and password!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                style: {
                    border: "2px solid red",
                    backgroundColor: "#fff",
                    color: "red"
                }
            });
            return;
        }

        setLoading(true); // Show Logging in...

        try {
            const res = await axios.post('http://localhost:8000/api/v1/login', inputs);
            console.log("Login response:", res.data);

            if (res.data.success && res.data.others && res.data.others._id) {
                sessionStorage.setItem("id", res.data.others._id);
                dispatch(authActions.login());

                toast.success("Login successful!", {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: true,
                    style: {
                        border: "2px solid green",
                        backgroundColor: "#fff",
                        color: "green"
                    }
                });

                setTimeout(() => {
                    setLoading(false);
                    navigate('/lists');
                }, 1600);
            } else {
                toast.error(res.data.message || "Invalid credentials!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    style: {
                        border: "2px solid red",
                        backgroundColor: "#fff",
                        color: "red"
                    }
                });
                setLoading(false);
            }
        } catch (error) {
            console.error("Login error:", error.response?.data || error.message);
            toast.error("Server error! Please try again later.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                style: {
                    border: "2px solid red",
                    backgroundColor: "#fff",
                    color: "red"
                }
            });
            setLoading(false);
        }
    }

    return (
        <div className='log-in'>
            <div className='container text-white text-center'>
                <div className='row log-in-container'>
                    <div className='log-in-left col-lg-6 d-flex justify-content-center align-items-center'>
                        <img
                            src="https://i.ibb.co/T2s53vf/Sign-in-pana.png"
                            alt="SignIn Img"
                        />
                    </div>
                    <div className='log-in-right col-lg-6 d-flex justify-content-center align-items-center gap-4'>
                        <form onSubmit={loginSubmit} className='input-group'>
                            <div className='log-in-input'>
                                <MdEmail className="react-icons" />
                                <input
                                    type='email'
                                    name='email'
                                    placeholder='Email'
                                    value={inputs.email}
                                    onChange={loginHandleChange}
                                />
                            </div>
                            <div className='log-in-input'>
                                <FaLock className="react-icons" />
                                <input
                                    type='password'
                                    name='password'
                                    placeholder='Password'
                                    value={inputs.password}
                                    onChange={loginHandleChange}
                                />
                            </div>
                            <div className='loginBtn mt-3'>
                                <Button
                                    btnText={loading ? "Logging in..." : "Log In"}
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
                        <p>Don't have an account yet? <Link to='/signup'>Sign Up</Link> here.</p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default LogIn;
