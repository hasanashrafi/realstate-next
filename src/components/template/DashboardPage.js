

import React from 'react';
import moment from 'moment-jalaali';

function DashboardPage({ createdAt }) {
    const persianDate = moment(createdAt).format('jYYYY/jMM/jDD');

    return (
        <div className='p-6  font-DanaDemiBold min-h-screen'>
            <p className='text-lg text-blue-600 p-2 mb-5'>سلام 👋</p>
            <p className='text-lg text-red-600'>آگهی های خود را ثبت کنید تا هزاران نفر آن را ببینند.</p>
            <div className='p-2 w-72 bg-violet-200 rounded-md my-10'>
                <p className='text-violet-900 flex items-center justify-around'>تاریخ عضویت:
                    <span >
                        {persianDate}
                    </span>
                </p>
            </div>
        </div>
    );
}

export default DashboardPage;
