import React from 'react';

const BusinessSummery = () => {
    return (
        <div className='shadow-lg mb-9 '>
            <h1 className='text-5xl text-center mt-9'>Business Summary Of Gardeners Tool</h1>
            <div className='text-center mt-9'>
                <div class="stats stats-vertical lg:stats-horizontal shadow text-center">

                    <div class="stat ">
                        <div class="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div class="stat-title">Countries</div>
                        <div class="stat-value">100+</div>
                        <div class="stat-desc text-secondary ">Trusted</div>
                    </div>
                    <div class="stat bg-warning">
                        <div class="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div class="stat-title">Account Balance</div>
                        <div class="stat-value  text-primary">$89,5000</div>
                        <div class="stat-actions">
                            <button class="btn btn-sm btn-success">Add funds</button>
                        </div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                        </div>
                        <div class="stat-title">New Users</div>
                        <div class="stat-value">4,200</div>
                        <div class="stat-desc">↗︎ 400 (22%)</div>
                    </div>
                    <div class="stat ">
                        <div class="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div class="stat-title">Annual Revenue</div>
                        <div class="stat-value text-secondary">$100,000 </div>
                        <div class="stat-desc">Compare to last year increase rate ↗︎ (22%)</div>
                    </div>
                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div class="stat-title">Total Page Views</div>
                        <div class="stat-value text-primary">89,400 </div>
                        <div class="stat-desc text-secondary">21% more than last month</div>
                    </div>
                    <div class="stat">
                        <div class="stat-title">Total tools</div>
                        <div class="stat-value text-primary">50+</div>
                        <div class="stat-desc">increasing day by day</div>
                    </div>

                    <div class="stat bg-warning">
                        <div class="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                        </div>
                        <div class="stat-title">New Registers</div>
                        <div class="stat-value">1,200</div>
                        <div class="stat-actions">
                            <button class="btn btn-sm btn-success">Please Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BusinessSummery;