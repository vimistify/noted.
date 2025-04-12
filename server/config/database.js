const mongoose = require('mongoose');

const url = `mongodb+srv://notedUser:mansi123@noted.wlpkc2t.mongodb.net/?retryWrites=true&w=majority&appName=Noted`;

const connectDatabase = async (req, res) => {
    try {
        await mongoose
            .connect(url)
            .then(() => {
                console.log("Database Connected!!");
            });
    }catch (error) {
        console.error("Database Connection Failed:", error.message);
    }
    
};
connectDatabase();