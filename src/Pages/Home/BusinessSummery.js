import React from 'react';

const BusinessSummery = () => {
    return (
        <div className='mb-9'>
            <h1 className='text-4xl text-center mt-9'>Business Summary Of Gardeners Tool</h1>
            <div className='text-center mt-9'>
                <div className="stats stats-vertical lg:stats-horizontal shadow text-center">

                    <div className="stat ">
                        <div className="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div className="stat-title">Countries</div>
                        <div className="stat-value" > 100 +</div >
                        <div className="stat-desc text-secondary " > Trusted</div >
                    </div >
                    <div className="stat bg-warning" >
                        <div className="stat-figure text-secondary" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div >
                        <div className="stat-title" > Account Balance</div >
                        <div className="stat-value  text-primary" > $89, 5000</div >
                        <div className="stat-actions" >
                            <button className="btn btn-sm btn-success" > Add funds</button >
                        </div >
                    </div >

                    <div lassName="stat" >
                        <div className="stat-figure text-secondary" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                        </div >
                        <div className="stat-title" > New Users</div >
                        <div className="stat-value" > 4, 200</div >
                        <div className="stat-desc" >↗︎ 400(22 %)</div >
                    </div >
                    <div className="stat " >
                        <div className="stat-figure text-secondary" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div >
                        <div className="stat-title" > Annual Revenue</div >
                        <div className="stat-value text-secondary" > $100, 000 </div >
                        <div className="stat-desc" > Compare to last year increase rate ↗︎ (22 %)</div >
                    </div >
                    <div className="stat" >
                        <div className="stat-figure text-secondary" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div >
                        <div className="stat-title" > Total Page Views</div >
                        <div className="stat-value text-primary" > 89, 400 </div >
                        <div className="stat-desc text-secondary" > 21 % more than last month</div >
                    </div >
                    {<div className="stat" >
                        <div className="stat-title" > Total tools</div >
                        <div className="stat-value text-primary" > 50 +</div >
                        <div className="stat-desc" > increasing day by day</div >
                    </div >}

                    <div className="stat bg-warning">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                        </div >
                        <div className="stat-title" > New Registers</div >
                        <div className="stat-value" > 1, 200</div >
                        <div className="stat-actions" >
                            <button className="btn btn-sm btn-success" > Register</button >
                        </div >
                    </div >
                </div >
            </div >
        </div >
    );
};

export default BusinessSummery;