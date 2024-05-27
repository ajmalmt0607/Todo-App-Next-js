import { ConnectDB } from "@/lib/config/db";
import TodoModel from "@/lib/models/TodoModel";
import { NextResponse } from "next/server";

const LoadDB = async () => {
    await ConnectDB();
};

LoadDB();

//cutsom handler for GET Method
export async function GET(request) {
    const todos = await TodoModel.find({});
    return NextResponse.json({ todos: todos });
}

//custom handler for POST Method
export async function POST(request) {
    const { title, description } = await request.json();
    await TodoModel.create({ title, description });
    return NextResponse.json({ msg: "Todo Created" });
}
//when we hit the post method, in that case send title and description as request from our input fields

export async function DELETE(request) {
    const mongoId = await request.nextUrl.searchParams.get("mongoId");
    await TodoModel.findByIdAndDelete(mongoId);
    return NextResponse.json({ msg: "Todo Deleted" });
}

//custom Handler for Update
export async function PUT(request) {
    const mongoId = await request.nextUrl.searchParams.get("mongoId");
    await TodoModel.findByIdAndUpdate(mongoId, {
        $set: {
            isCompleted: true,
        }, //when we modify any property here this $set function find the todo using mongoId and it will save the changes
    });
    return NextResponse.json({ msg: "Todo Deleted" });
}
