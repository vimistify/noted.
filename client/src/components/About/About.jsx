import React from 'react';
import './About.css';

const About = () => {
    return (
        <>
            <div className='about d-flex flex-column justify-content-center align-items-center'>
                <div className="container text-white text-center d-flex flex-column gap-5">
                    <h1>About Us</h1>
                    <p>
                        <q>
                            Noted. is your ultimate task management solution, designed to simplify your workflow and boost your productivity. With Noted., you can effortlessly create, update and delete tasks, ensuring that you stay focused on what matters most. This tool is built to adapt to your unique needs, whether you're a professional or a student.
                        </q>
                    </p>
                    <img src="https://i.ibb.co/Kh6nzhg/about-us.png" className='about-img' alt="AboutUs Todo" />
                </div>
            </div >
        </>
    )
}

export default About;