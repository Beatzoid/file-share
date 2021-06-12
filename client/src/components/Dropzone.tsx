import { Dispatch, FunctionComponent, useCallback } from "react";
import { useDropzone } from "react-dropzone";

const Dropzone: FunctionComponent<{ setFile: Dispatch<any> }> = ({
    setFile
}) => {
    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles[0]);
        setFile(acceptedFiles[0]);
    }, []);

    const { getRootProps, getInputProps, isDragAccept } = useDropzone({
        onDrop,
        multiple: false
    });

    return (
        <div className="w-full p-4">
            <div
                {...getRootProps()}
                className="w-full rounded-md cursor-pointer h-80 focus:outline-none"
            >
                <input {...getInputProps()} />
                <div
                    className={
                        "flex flex-col items-center justify-center h-full space-y-3 border-2 border-dashed border-yellow-light rounded-xl " +
                        (isDragAccept && "border-green-500")
                    }
                >
                    <img
                        src="/images/folder.png"
                        alt="Folder"
                        className="w-16 h-16"
                    />
                    <p>Drag and drop files here</p>
                    <p className="mt-2 text-base text-gray-300">
                        Or click to select files
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Dropzone;
