const router = require('express').Router();
const User = require('../model/user');
const bcrypt = require('bcryptjs');

// Sign-Up API
router.post('/register', async (req, res) => {
    try {
        const { email, username, password } = req.body;

        // generate a hashed version of the user's password to encrypt
        const hashPass = bcrypt.hashSync(password);

        // check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(200).json({ message: "User already exists!!" });
        }

        // create new user
        const user = new User({ email, username, password: hashPass });
        await user.save().then(() => res.status(200).json({ message: "SignUp Successfull." }));

    } catch (error) {
        // console.log(error);
        res.status(500).json({ message: "Internal Server Error!!" });
    }
});

// Sign-In API
router.post('/login', async (req, res) => {
    try {
        // check if email already exists
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(200).json({ message: "Please Sign-Up First!!" });
        }

        // check if password is match or not with user's password from database
        const isPasswordCorrect = bcrypt.compareSync(
            req.body.password,
            user.password
        );
        
        // check if password is correct or not
        if (!isPasswordCorrect) {
            return res.status(200).json({ message: "Password is not correct!!" });
        }

        /* 
            extract the 'password' property from the 'user._doc' &
            the rest of the properties in 'user._doc' are collected into the 'others' object by using spread operator like this '...others'
        */
        const { password, ...others } = user._doc;
        return res.status(200).json({ others });

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error!!" });
    }
});

module.exports = router;