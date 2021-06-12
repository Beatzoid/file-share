import { FunctionComponent } from "react";
import { formatBytes } from "src/utils/formatBytes";
import { IFile } from "src/utils/types";

const File: FunctionComponent<{ file: IFile }> = ({ file }) => {
    return (
        <div className="flex items-center w-full p-4 my-2">
            <span className="mx-2">{file.name}</span>
            <span className="ml-auto">{formatBytes(file.sizeInBytes)}</span>
        </div>
    );
};

export default File;
