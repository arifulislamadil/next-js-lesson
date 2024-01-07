import DashboardNav from '@/components/DashboardNav/DashboardNav';
import React from 'react';

const layout = ({children}) => {
    return (
        <div className='flex'>
            <DashboardNav/>
            {children}
        </div>
    );
};

export default layout;