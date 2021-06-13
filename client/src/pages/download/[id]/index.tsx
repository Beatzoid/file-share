import axios from "axios";
import { GetServerSidePropsContext, NextPage } from "next";
import File from "@components/File";
import fileDownload from "js-file-download";

import { IFile } from "../../../utils/types";

const DownloadPage: NextPage<{ file: IFile }> = ({
    file: { format, name, sizeInBytes, id }
}) => {
    const handleDownload = async () => {
        const { data } = await axios.get(`api/files/${id}/download`, {
            responseType: "blob"
        });

        fileDownload(data, name);
    };

    return (
        <div className="flex flex-col items-center justify-center py-3 space-y-4 bg-gray-800 rounded-md shadow-xl w-96">
            {!id ? (
                <span>Oops, that file doesn't exist! Double check the URL</span>
            ) : (
                <>
                    <img
                        src="/images/download.png"
                        alt="Download"
                        className="w-16 h-16"
                    />
                    <h1 className="text-xl">Download your File</h1>
                    <File file={{ format, name, sizeInBytes }} />
                    <button className="button" onClick={handleDownload}>
                        Download
                    </button>
                </>
            )}
        </div>
    );
};

export default DownloadPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
    let file;
    try {
        const { data } = await axios.get(`/api/files/${context.query.id}`);
        file = data;
    } catch (err) {
        console.log(err.response.data);
        file = {};
    }

    return {
        props: { file }
    };
}
