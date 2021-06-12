import mongoose from "mongoose";

const connectDB = async () => {
    mongoose
        .connect(process.env.MONGODB_URL!, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true
        })
        .then(() => console.log("Connected to MongoDB!"))
        .catch((err) => console.log(err));
};

export default connectDB;
