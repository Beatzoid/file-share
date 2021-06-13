import Download from "@components/Download";
import Dropzone from "@components/Dropzone";
import File from "@components/File";
import axios from "axios";
import { useState } from "react";
import { promisify } from "util";

const wait = promisify(setTimeout);

export default function Home() {
    const [file, setFile] = useState<any>(null);
    const [id, setId] = useState("");
    const [downloadPageLink, setDownloadPageLink] = useState("");
    const [uploadState, setUploadState] =
        useState<
            | "Uploading"
            | "Upload Failed"
            | "Uploaded"
            | "Upload"
            | "Please upload a file"
        >("Upload");

    const handleUpload = async () => {
        if (uploadState === "Uploading") return;
        setUploadState("Uploading");

        const formData = new FormData();
        formData.append("file", file!);

        try {
            const { data } = await axios({
                method: "POST",
                data: formData,
                url: "api/files/upload",
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });

            setDownloadPageLink(data.downloadLink);
            setId(data.id);
        } catch (err) {
            console.log(err.response.data);

            if (err.response.data.message.includes("provide")) {
                setUploadState("Please upload a file");
                setTimeout(() => setUploadState("Upload"), 2000);
            } else {
                setUploadState("Upload Failed");
            }
        }
    };

    const resetComponent = () => {
        setUploadState("Upload");
        setFile(null);
        setDownloadPageLink("");
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center bg-gray-800 shadow-xl rounded-xl w-96">
                {!downloadPageLink && <Dropzone setFile={setFile} />}
                {file && (
                    <File
                        file={{
                            format: file.type.split("/")[1],
                            name: file.name,
                            sizeInBytes: file.size
                        }}
                    />
                )}

                {!downloadPageLink && file && (
                    <button className="button" onClick={handleUpload}>
                        {uploadState}
                    </button>
                )}

                {downloadPageLink && (
                    <div className="p-2 text-center">
                        <Download downloadPageLink={downloadPageLink} />
                        <button className="button" onClick={resetComponent}>
                            Upload New File
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
