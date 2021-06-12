import { Schema, Document, model } from "mongoose";

const FileSchema = new Schema(
    {
        filename: {
            type: String,
            required: true
        },
        format: {
            type: String,
            required: true
        },
        secureUrl: {
            type: String,
            required: true
        },
        sizeInBytes: {
            type: String,
            required: true
        },
        sender: {
            type: String
        },
        receiver: {
            type: String
        }
    },
    { timestamps: true }
);

interface IFile extends Document {
    filename: string;
    format: string;
    secureUrl: string;
    sizeInBytes: string;
    sender?: string;
    receiver?: string;
}

export default model<IFile>("File", FileSchema);
