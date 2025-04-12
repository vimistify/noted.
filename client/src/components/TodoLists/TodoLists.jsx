import React, { useEffect, useState } from 'react';
import './TodoLists.css';
import toast, { Toaster } from 'react-hot-toast';
import Button from '../Button/Button';
import TodoListBox from './TodoListBox';
import TodoListUpdate from './TodoListUpdate';
// import { useSelector } from 'react-redux';
import axios from 'axios';

let id = sessionStorage.getItem('id');

const TodoLists = () => {

    const [inputs, setInputs] = useState({ title: "", description: "" });
    const [array, setArray] = useState([]);
    const [showModal, setShowModal] = useState(false);

    // const isLoggedIn = useSelector((state) => state.isLoggedIn);

    // if (isLoggedIn) {
    //     console.log(id);
    // }

    const taskHandleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    }

    const taskSubmitClick = async () => {
        if (inputs.title === "" || inputs.description === "") {
            toast.error("Title and Description can't be empty!!", {
                icon: '⚠️',
                style: {
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    color: '#ff3737',
                    background: 'rgb(51, 51, 51)',
                    boxShadow: '0 20px 20px rgba(0, 0, 0, 0.5)',
                    border: '1px solid rgba(121, 121, 121, 0.3)',
                    borderRadius: '10px',
                    padding: '15px 20px',
                }
            });
        } else {
            if (id) {
                await axios.post('http://localhost:8000/api/v2/addTask', {
                    title: inputs.title,
                    description: inputs.description,
                    id: id
                })
                    .then((res) => {
                        console.log(res);
                    });
                setArray([...array, inputs]);
                setInputs({ title: '', description: '' });
                toast.success("Task added successfully!!", {
                    style: {
                        fontSize: '0.8rem',
                        fontWeight: '500',
                        color: '#82dd55',
                        background: 'rgb(51, 51, 51)',
                        boxShadow: '0 20px 20px rgba(0, 0, 0, 0.5)',
                        border: '1px solid rgba(121, 121, 121, 0.3)',
                        borderRadius: '10px',
                        padding: '15px 20px',
                    }
                });
            } else {
                setInputs({ title: '', description: '' });
                toast.error("Task Not Saved! Please Sign-Up First.", {
                    style: {
                        fontSize: '0.8rem',
                        fontWeight: '500',
                        color: '#ff3737',
                        background: 'rgb(51, 51, 51)',
                        boxShadow: '0 20px 20px rgba(0, 0, 0, 0.5)',
                        border: '1px solid rgba(121, 121, 121, 0.3)',
                        borderRadius: '10px',
                        padding: '15px 20px',
                    }
                });
            }
        }
    }

    const deleteTask = async (taskId) => {
        if (id) {
            await axios.delete(`http://localhost:8000/api/v2/deleteTask/${taskId}`, {
                data: { id: id }
            })
                .then(() => {
                    toast.success("Task deleted successfully!!", {
                        style: {
                            fontSize: '0.8rem',
                            fontWeight: '500',
                            color: '#00b000',
                            background: 'rgb(51, 51, 51)',
                            boxShadow: '0 20px 20px rgba(0, 0, 0, 0.5)',
                            border: '1px solid rgba(121, 121, 121, 0.3)',
                            borderRadius: '10px',
                            padding: '15px 20px',
                        }
                    });
                });
        } else {
            toast.error("Task Not Saved! Please Sign-Up First.", {
                style: {
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    color: '#ff3737',
                    background: 'rgb(51, 51, 51)',
                    boxShadow: '0 20px 20px rgba(0, 0, 0, 0.5)',
                    border: '1px solid rgba(121, 121, 121, 0.3)',
                    borderRadius: '10px',
                    padding: '15px 20px',
                }
            });
        }
    }

    const displayEditModal = () => {
        setShowModal(true);
    }

    const closeEditModal = () => {
        setShowModal(false);
    }

    useEffect(() => {
        if (id) {
            const fetch = async () => {
                await axios.get(`http://localhost:8000/api/v2/getTask/${id}`)
                    .then((res) => {
                        setArray(res.data.list);
                        // console.log(new Date(res.data.list[0].createdAt).toISOString().split('T')[0]);
                    })
            }
            fetch();
        } else {
            toast.error("Task Not Saved! Please Sign-Up First.", {
                style: {
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    color: '#ff3737',
                    background: 'rgb(51, 51, 51)',
                    boxShadow: '0 20px 20px rgba(0, 0, 0, 0.5)',
                    border: '1px solid rgba(121, 121, 121, 0.3)',
                    borderRadius: '10px',
                    padding: '15px 20px',
                }
            });
        }
    }, [taskSubmitClick]);

    return (
        <>
            <div className='list container d-flex flex-column align-items-center gap-5'>
                <Toaster
                    position="bottom-right"
                />
                <div className='list-header text-white text-center'>
                    <h1>Noted.</h1>
                    <h2>Create Your To Do List Here . . .</h2>
                </div>

                <div className='list-main container d-flex flex-column align-items-center gap-3'>
                    <div className='list-inputs d-flex flex-column gap-4 w-75'>
                        <input
                            type="text"
                            placeholder='Task Title (Max 10 Words)'
                            maxLength="10"
                            autoComplete='off'
                            name='title'
                            value={inputs.title}
                            onChange={taskHandleChange}
                        />
                        <input
                            type="text"
                            placeholder='Task Description (Max 30 Words)'
                            maxLength="30"
                            autoComplete='off'
                            name='description'
                            value={inputs.description}
                            onChange={taskHandleChange}
                        />
                    </div>
                    <Button
                        btnText="Add Task"
                        btnTextWeight="600"
                        btnTextColor="black"
                        btnTextSpacing="0.5px"
                        btnBgColor="white"
                        btnBorder="none"
                        btnOutline="none"
                        btnPadding="15px 30px"
                        btnBorderRadius="50px"
                        btnHoverShadow="0 20px 60px rgba(0, 0, 0, 0.4)"
                        btnTransition=".3s"
                        onClick={taskSubmitClick}
                    />
                </div>

                <div className='list-body'>
                    <div className="container">
                        <div className="row d-flex justify-content-center align-items-center gap-3">
                            {
                                array && array.map((item, index) => (
                                    <div
                                        key={index}
                                        className='col-lg-3 my-2 d-flex justify-content-center align-items-center gap-3'
                                    >
                                        <TodoListBox
                                            id={item._id}
                                            title={item.title}
                                            body={item.body}
                                            taskDate={new Date(item.createdAt)}
                                            deleteTaskId={deleteTask}
                                            displayEditModal={displayEditModal}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className={`list-update ${showModal ? 'show' : ''}`}>
                <div className="container">
                    <TodoListUpdate
                        closeEditModal={closeEditModal}
                    />
                </div>
            </div>
        </>
    )
}

export default TodoLists;