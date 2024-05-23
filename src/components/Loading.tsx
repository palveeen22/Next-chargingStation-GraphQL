import React from 'react';

const LoadingScreen = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-[#035252] bg-opacity-50 flex justify-center items-center z-50">
            <div className="text-center">
                <h3 className='text-white text-2xl font-bold'>Voltron</h3>
                <p>EVCuzz Charging Network is now Voltron!</p>
            </div>
        </div>
    );
};

export default LoadingScreen;