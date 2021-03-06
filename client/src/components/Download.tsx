import { FunctionComponent } from "react";

const Download: FunctionComponent<{ downloadPageLink: string }> = ({
    downloadPageLink
}) => {
    return (
        <div className="p-1">
            <h1 className="my-2 text-lg font-medium">Upload Complete</h1>
            <div className="flex space-x-3">
                <span className="break-all">
                    <a href={downloadPageLink}>{downloadPageLink}</a>
                </span>
                <img
                    src="/images/copy.png"
                    alt=""
                    className="object-contain w-8 h-8 cursor-pointer"
                    onClick={() =>
                        navigator.clipboard.writeText(downloadPageLink)
                    }
                />
            </div>
        </div>
    );
};

export default Download;
