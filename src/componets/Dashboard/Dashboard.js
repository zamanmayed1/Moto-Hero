import React, { useEffect, useState } from 'react';
import Chart1 from '../Chart1';
import Chart2 from '../Chart2';


const Dashboard = () => {
      
        return (
                    <div className='dashboard py-20'>
                              <h1 className='text-4xl mb-10'>Dashboard</h1>
                        <div className='grid md:grid-cols-2 md:gap-20 gap-5 md:px-20 mb-20'>

                                <div className="singleCard grid md:justify-center p-4">
                                        <h1 className="text-3xl mb-6">Investment Revenue Sell</h1>
                                        <Chart1></Chart1>
                                </div>
                                <div className="singleCard grid md:justify-center p-4">
                                        <h1 className="text-3xl mb-6">Investment VS Revenue</h1>
                                        <Chart2></Chart2>
                                </div>
                        </div>

                    </div>
          );
};

export default Dashboard;