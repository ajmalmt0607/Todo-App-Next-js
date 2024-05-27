import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://ajmalmt:pMbyYNPeYoc4NPli@cluster0.edmn2ay.mongodb.net/todo-app"
    );
    console.log("DB Connected");
};
