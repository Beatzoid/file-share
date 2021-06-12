import { Router } from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import File from "../models/fileModel";
import { handleError } from "../utils/errorHandle";

const router = Router();
const storage = multer.diskStorage({});

let upload = multer({
    storage
});

// @ts-ignore
router.post("/upload", upload.single("file"), async (req, res) => {
    try {
        if (!req.file)
            return res.status(400).json({ message: "Please provide a file" });

        cloudinary.uploader
            .upload(req.file.path, {
                folder: "file-share",
                resource_type: "auto"
            })
            .then(async (uploadedFile) => {
                const { originalname } = req.file;
                const { secure_url, bytes, format } = uploadedFile;

                const file = await File.create({
                    filename: originalname,
                    sizeInBytes: bytes,
                    secureUrl: secure_url,
                    format
                });
                return res.status(200).json({
                    id: file._id,
                    downloadLink: `${process.env.API_BASE_ENDPOINT}/download/${file._id}`
                });
            })
            .catch((err) => {
                return handleError(err, res);
            });
    } catch (err) {
        return handleError(err, res);
    }
});

export default router;
