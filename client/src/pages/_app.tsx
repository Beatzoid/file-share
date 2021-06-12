import "tailwindcss/tailwind.css";
import "../../styles/globals.css";

function MyApp({ Component, pageProps }: any) {
    return (
        <div className="grid h-screen font-serif text-white bg-gray-900 place-items-center">
            <div>
                <Component {...pageProps} />
            </div>
        </div>
    );
}

export default MyApp;
