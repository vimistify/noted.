const router = require('express').Router();
const User = require('../model/user');
const List = require('../model/list');

// Create Task API
router.post('/addTask', async (req, res) => {
    try {
        const { title, description, id } = req.body;

        const existingUser = await User.findById(id);

        if (existingUser) {
            const list = new List({ title, body: description, user: existingUser });
            await list.save().then(() => res.status(200).json({ list }));
            existingUser.list.push(list);
            existingUser.save();
        }
    } catch (error) {
        console.log(error);
    }
});

// Update Task API
router.put('/updateTask/:id', async (req, res) => {
    try {
        const { title, body, email } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            /* 
                updating the task in database by finding the id (provided in `req.params.id`) &
                updates its `title` and `body` fields with the values passed in the request body.
            */
            const list = await List.findByIdAndUpdate(req.params.id, { title, body });
            list.save().then(() => res.status(200).json({ message: "Task Updated" }));
        }
    } catch (error) {
        console.log(error);
    }
});

// Delete Task API
router.delete('/deleteTask/:id', async (req, res) => {
    try {
        const { id } = req.body;

        const existingUser = await User.findByIdAndUpdate(
            id,
            { $pull: { list: req.params.id } }
        );

        if (existingUser) {
            // deleting the task in database by finding the id (provided in `req.params.id`)
            await List.findByIdAndDelete(req.params.id).then(() =>
                res.status(200).json({ message: "Task Deleted" })
            );
        }
    } catch (error) {
        console.log(error);
    }
});

// Get All Task API
router.get('/getTask/:id', async (req, res) => {
    /*
        To find all tasks (or lists) that belong to a specific user & 
        the sort method is used to arrange the task added recently at the top.
    */
    const list = await List.find({ user: req.params.id }).sort({ createdAt: -1 });

    if (list.length !== 0) {
        res.status(200).json({ list });
    } else {
        res.status(200).json({ message: "Task Not Found!!" });
    }
});

module.exports = router;