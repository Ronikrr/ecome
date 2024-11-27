import React from 'react';

function Loader() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80">
            <div className="w-16 h-16 border-4 border-t-4 border-gray-200 rounded-full border-t-[#4f282b] animate-spin"></div>
        </div>
    );
}

export default Loader;
