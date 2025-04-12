# Noted.

It's is a simple web application for creating and managing todo list. It allows users to create tasks with titles and descriptions, update existing tasks and delete tasks and provides a user friendly interface for organizing tasks and staying productive.

## Features

- **Task Management**: User can create, update and delete their tasks & also can view their tasks in a user friendly interface.
- **User Authentication**: Users can sign up and log in to access their personalized to-do lists.
- **Responsive Design**: Compatible with various screen sizes for a seamless user experience.
- **Intuitive Interface**: User-friendly dark minimal interface for easy task management.

## Screenshots

![Noted.](Noted/Noted..mp4)

## Backend API Documentation

### Sign-Up API

- **Endpoint**: `/api/v1/register`
- **Method**: `POST`
- **Description**: Creates a new user account with the provided email, username, and password.
- **Parameters**:
  - `email` (string): User's email address.
  - `username` (string): User's chosen username.
  - `password` (string): User's chosen password.
- **Response**:
  - `message` (string): Success message or error message if user already exists.

### Sign-In API

- **Endpoint**: `/api/v1/login`
- **Method**: `POST`
- **Description**: Allows existing users to log in with their email and password.
- **Parameters**:
  - `email` (string): User's email address.
  - `password` (string): User's password.
- **Response**:
  - `others` (object): User details excluding the password.
  - `message` (string): Error message if login fails.

### Create Task API

- **Endpoint**: `/api/v2/addTask`
- **Method**: `POST`
- **Description**: Adds a new task to the user's to-do list.
- **Parameters**:
  - `title` (string): Title of the task.
  - `body` (string): Description of the task.
  - `email` (string): User's email address.
- **Response**:
  - `list` (object): Details of the added task.

### Update Task API

- **Endpoint**: `/api/v2/updateTask/:id`
- **Method**: `PUT`
- **Description**: Updates an existing task in the user's to-do list.
- **Parameters**:
    - `title` (string): New title for the task.
    - `body` (string): New description for the task.
    - `email` (string): User's email address.
- **Response**:
    - `message` (string): Success message indicating the task was updated.

### Delete Task API

- **Endpoint**: `/api/v2/deleteTask/:id`
- **Method**: `DELETE`
- **Description**: Deletes a task from the user's to-do list.
- **Parameters**:
    - `id` (string): ID of the task to be deleted.
    - `email` (string): User's email address.
- **Response**:
    - `message` (string): Success message indicating the task was deleted.

### Get Tasks API

- **Endpoint**: `/api/v2/getTask/:id`
- **Method**: `GET`
- **Description**: Retrieves all tasks belonging to a user.
- **Parameters**:
    - `id` (string): ID of the user whose tasks are to be retrieved.
- **Response**:
    - `list` (array): Array of task objects belonging to the user.

## Technologies Used

- **Frontend**:
  - React.js: For user interfaces.
  - React Router: For Routing in applications.
  - Bootstrap: For responsive design.
  - React Icons: Icon library.
  - Axios: For making requests to the backend.

- **Backend**:
  - Node.js: For server-side logic.
  - Express.js: For building APIs and handling HTTP requests.
  - MongoDB: For storing user data and task information.
  - Mongoose: MongoDB object modeling for Node.js applications.
  - bcrypt.js: Library for hashing passwords securely.

## Getting Started

To run ListFlow locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/PranabKumarSahoo/ListFlow.git

2. Navigate to the project directory:
    ```bash
    cd ListFlow

3. Install dependencies for the frontend and backend:
    ```bash
    cd client
    npm install

    cd server
    npm install

4. Start the frontend server:
    ```bash
    npm start

5. Start the backend server:
    ```bash
    npm run dev

6. Open your browser and navigate to `http://localhost:3000` to access ListFlow.

## Contact

Feel free to reach out to kumarspranab19@gmail.com with any questions or feedback!!

## License

This project is open-source and available under the [MIT License](LICENSE). Feel free to contribute.
