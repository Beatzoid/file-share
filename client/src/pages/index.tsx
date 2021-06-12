import Dropzone from "@components/Dropzone";
import { useState } from "react";

export default function Home() {
    const [file, setFile] = useState<any>(null);

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center bg-gray-800 shadow-xl rounded-xl w-96">
                <Dropzone setFile={setFile} />
                {/*Render File */}
                {file?.name}
                {/* Upload Button */}
            </div>
        </div>
    );
}
