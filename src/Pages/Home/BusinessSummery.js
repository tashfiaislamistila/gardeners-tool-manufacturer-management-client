import React from 'react';

const BusinessSummery = () => {
    return (
        <div className='shadow-lg mb-9 '>
            <h1 className='text-5xl text-center mt-9'>Business Summary Of Gardeners Tool</h1>
            <div className='text-center mt-9'>
                <div class="stats stats-vertical lg:stats-horizontal shadow text-center">

                    <div class="stat ">
                        <div class="stat-title">Countries</div>
                        <div class="stat-value">100+</div>
                        <div class="stat-desc">Trusted</div>
                    </div>
                    <div class="stat bg-warning">
                        <div class="stat-title">Account Balance</div>
                        <div class="stat-value  text-primary">$89,5000</div>
                        <div class="stat-actions">
                            <button class="btn btn-sm btn-success">Add funds</button>
                        </div>
                    </div>

                    <div class="stat">
                        <div class="stat-title">New Users</div>
                        <div class="stat-value">4,200</div>
                        <div class="stat-desc">↗︎ 400 (22%)</div>
                    </div>
                    <div class="stat ">
                        <div class="stat-title">Annual Revenue</div>
                        <div class="stat-value text-secondary">$100,000 </div>
                        <div class="stat-desc">Compare to last year increase rate ↗︎ (22%)</div>
                    </div>
                    <div class="stat">
                        <div class="stat-title">Total Page Views</div>
                        <div class="stat-value text-primary">89,400 </div>
                        <div class="stat-desc">21% more than last month</div>
                    </div>

                    <div class="stat bg-warning">
                        <div class="stat-title">New Registers</div>
                        <div class="stat-value">1,200</div>
                        <div class="stat-actions">
                            <button class="btn btn-sm btn-success">Please Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummery;