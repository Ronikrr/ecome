import React from "react";

const SuccessNotification = ({ message, onClose }) => {
    return (
        <div className="fixed z-50 w-64 p-4 text-center text-white transition-transform bg-green-500 rounded-md shadow-lg top-5 right-5 transform-gpu">
            <p className="text-sm font-semibold">{message}</p>
            <button
                onClick={onClose}
                className="mt-2 text-xs text-white hover:underline"
            >
                Dismiss
            </button>
        </div>
    );
};

export default SuccessNotification;
