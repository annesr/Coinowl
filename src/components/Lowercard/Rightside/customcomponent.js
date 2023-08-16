import React from 'react';

import linkicoin from "../../../icons/walletlicons/Icon.svg";

const CustomComponent = ({showicon , color , name }) => {
    return (
        <div className={`w-auto h-11 px-4 py-3 ${color} rounded-xl justify-start items-center gap-2 inline-flex mx-auto`}>
            <div className="text-white text-sm font-semibold leading-tight">{name}</div>
            {showicon && <img src={linkicoin} alt='' />}
        </div>
    );
};

export default CustomComponent;
