import React, { useEffect, useState } from 'react';
import Chart1 from '../Chart1';
import Chart2 from '../Chart2';
import Chart3 from '../Chart3';
import Chart4 from '../Chart4';


const Dashboard = () => {
      
        return (
                    <div>
                              <h1 className='text-4xl mb-10'>Dashboard</h1>
                        <div className='grid md:grid-cols-2 gap-20 md:px-20'>
                                <div className="singleCard grid justify-center p-6">
                                        <h1 className="text-3xl mb-6">BarChart</h1>
                                        <Chart1></Chart1>
                                </div>
                                <div className="singleCard grid justify-center p-6">
                                        <h1 className="text-3xl mb-6">ComposedChart</h1>
                                        <Chart2></Chart2>
                                </div>
                                <div className="singleCard grid justify-center p-6">
                                        <h1 className="text-3xl mb-6">ComposedChart</h1>
                                        <Chart3></Chart3>
                                </div>
                                <div className="singleCard grid justify-center p-6">
                                        <h1 className="text-3xl mb-6">ComposedChart</h1>
                                        <Chart4></Chart4>
                                </div>
                               
                              
                        </div>

                    </div>
          );
};

export default Dashboard;