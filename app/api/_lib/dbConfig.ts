/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
    const connectionState = mongoose.connection.readyState;

    if (connectionState === 1) {
        console.log("Database connection already established");
        return;
    }
    if (connectionState === 2) {
        console.log("Database connection is connecting");
        return;
    }

    try {
        mongoose.connect(MONGODB_URI!, {
            bufferCommands: true,
        });

        mongoose.connection.on("connected", () => {
            console.log("Database connected");
        });
    } catch (error: any) {
        console.error("Database connection failed", error);
    }
};

export default connect;
