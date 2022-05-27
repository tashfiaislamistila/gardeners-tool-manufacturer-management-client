import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-5xl text-center text-primary mt-4'>Blogs</h2>
            <div className='text-2xl mt-4'>
                <h2 className='text-secondary'>Q:1 How will you improve the performance of a React Application?</h2>
                <p>Answer-1 During the initial rendering process, React builds a DOM tree of components. So, when data changes in the DOM tree, we want React to re-render only those components that were affected by the change, skipping the other components in the tree that were not affected.There are 5 ways you can improve react performance-</p>
                <li >
                    Use React.Fragment to Avoid Adding Extra Nodes to the DOM.
                </li>
                <li>
                    Use Production Build.
                </li>
                <li>
                    Use React.Suspense and React.Lazy for Lazy Loading Components.
                </li>
                <li>
                    Virtualize a Large List Using react-window.
                </li>
                <li>
                    Use React.memo for Component Memoization.
                </li>
            </div>
            <div className='text-2xl mt-4'>
                <h2 className='text-secondary'>Q:2 What are the different ways to manage a state in a React application?</h2>
                <p>Answer-2 There are some different ways to manage a state in react.I will explain some- <li className='font-bold'> Use useReducer for Complex State</li>
                    Sometimes the useState hook will not cut it, especially when dealing with complex state behavior that may involve large objects. The useReducer hook is a powerful provided React hook for dealing with complex state management that does not require third-party dependencies. Also, it reduces the amount of data recreated with each render.
                </p>
                <li className='font-bold'>Custom Hooks FTW</li>
                Custom React hooks to encompass complex logic into a single accessible hook. This can come in handy for forms, toggles, asynchronous behavior, and anything else where you end up with a mess of hooks in your component.
                <li className='font-bold'>Global State Management</li>
                Custom React hooks to encompass complex logic into a single accessible hook. This can come in handy for forms, toggles, asynchronous behavior, and anything else where you end up with a mess of hooks in your component.
                <li className='font-bold'>Use Data Fetching Libraries</li>
                data fetching libraries like React Query for effectively fetching, caching, invalidating, and refreshing data from external sources. They can also be used for sending data to some external client and truly encompassing the whole workflow of interacting with a server.
            </div>
            <div className='text-2xl mt-4'>
                <h2 className='text-secondary'>Q-3 How does prototypical inheritance work</h2>
                <p>Answer-3 Prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype.</p>
            </div>
            <div className='text-2xl mt-4'>
                <h2 className='text-secondary'>Q-4 Why you do not set the state directly in React. </h2>
                <p>Answer-4 We should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made.</p>
            </div>
            <div className='text-2xl mt-4'>
                <h2 className='text-secondary'>Q-5 What is a unit test? Why should write unit tests? </h2>
                <p>Answer-5 Unit testing allows the programmer to refactor code at a later date, and make sure the module still works correctly (i.e. Regression testing). The procedure is to write test cases for all functions and methods so that whenever a change causes a fault, it can be quickly identified and fixed.</p>
            </div>
        </div >
    );
};

export default Blogs;