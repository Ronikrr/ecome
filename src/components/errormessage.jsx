import React from "react";

function ErrorMessage({ message }) {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-red-100">
            <div className="px-4 py-2 mb-2 text-lg font-semibold text-white bg-red-500 rounded-md shadow-md">
                <p>Error: {message}</p>
            </div>
            <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 mt-4 font-semibold text-white bg-red-500 rounded-md shadow-md hover:bg-red-600 focus:outline-none"
            >
                Retry
            </button>
        </div>
    );
}
export default ErrorMessage;