import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

function Dots() {
    return (
        <div className="block w-fit max-w-xs mx-auto  px-3 py-3 "  >
            <ThreeDots
                visible={true}
                height="80"
                width="80"
                color="#403ffe"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}

export default Dots