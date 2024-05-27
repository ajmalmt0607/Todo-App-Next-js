const { default: mongoose } = require("mongoose");

const Schema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        isCompleted: {
            type: Boolean,
            default: false,
        },
    },
    { timeStamps: true }
);

const TodoModel = mongoose.models.todo || mongoose.model("todo", Schema);
//used in Mongoose to define and manage a model for a MongoDB collection, ensuring that the model is only created once, even if the file is imported multiple times. Let's break it down step by step

export default TodoModel;
//// mongoose.models:////
// mongoose.models is an object that contains all the models that have already been defined. Each model is stored in this object with a key that matches the model's name.

//// mongoose.models.todo:////
// This checks if a model named "todo" already exists in mongoose.models. If it does, it returns that existing model.

////mongoose.model("todo", Schema):////
// If the model "todo" does not already exist, this part of the code defines a new model with the name "todo" using the provided Schema.
