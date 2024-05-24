import React from 'react';

const data = 'find your nearest charging station and see details'

const DetailNoData = () => {
    return (
        <div className="flex justify-center items-center bg-[#035252] rounded-xl py-12">
            <p className="text-center text-white text-lg font-medium p-5 w-[70%]">{(data).toLocaleUpperCase()}</p>
        </div>
    );
};

export default DetailNoData;