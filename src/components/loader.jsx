import React from 'react';

function Loader() {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen gap-4">
            <div className="flex items-center justify-center w-20 h-20 text-4xl text-[#4f282b] border-4 border-transparent rounded-full animate-spin border-t-[#4f282b]">
                <div className="flex items-center justify-center w-16 h-16 text-2xl text-red-400 border-4 border-transparent rounded-full animate-spin border-t-red-400" />
            </div>
        </div>
    );
}

export default Loader;
