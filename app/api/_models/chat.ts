import { models, model, Schema } from "mongoose";

const ChatSChema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: "User" },
        messages: { type: Schema.Types.ObjectId, ref: "Message" },
        messageId: { type: String, required: true },
    },
    { timestamps: true }
);

const Chat = models.Chat || model("Chat", ChatSChema);
export default Chat;
