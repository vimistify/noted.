import React from 'react'
import Button from '../Button/Button';

const TodoListUpdate = ({ closeEditModal }) => {
    return (
        <>
            <div className='todo-list-update d-flex flex-column justify-content-center align-items-center gap-5'>
                <h1>Update</h1>
                <div className='list-inputs d-flex flex-column gap-4 w-100'>
                    <input
                        type="text"
                        placeholder='Update Title'
                        name='title'
                    />
                    <input
                        type="text"
                        placeholder='Update Description'
                        name='description'
                    />
                </div>
                <div className='d-flex gap-3'>
                    <Button
                        btnText="Update"
                        btnTextSize="0.8rem"
                        btnTextWeight="600"
                        btnTextColor="black"
                        btnTextSpacing="0.5px"
                        btnBgColor="white"
                        btnBorder="none"
                        btnOutline="none"
                        btnPadding="10px 25px"
                        btnBorderRadius="50px"
                        btnHoverShadow="0 50px 50px rgba(0, 0, 0, 0.4)"
                        btnTransition=".3s"
                    />
                    <Button
                        btnText="Close"
                        btnTextSize="0.8rem"
                        btnTextWeight="600"
                        btnTextColor="black"
                        btnTextSpacing="0.5px"
                        btnBgColor="orchid"
                        btnBorder="none"
                        btnOutline="none"
                        btnPadding="10px 25px"
                        btnBorderRadius="50px"
                        btnHoverShadow="0 50px 50px rgba(0, 0, 0, 0.4)"
                        btnTransition=".3s"
                        onClick={closeEditModal}
                    />
                </div>
            </div>
        </>
    )
}

export default TodoListUpdate;