import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-center m-9 text-4xl text-red-300 font-bold'>Some Importent question you need to know!</h1>
            <div className='ml-20 mr-20 '>
             <div className='border bg-red-100  m-8 p-10'>
                <h1 className='text-3xl mb-4 font-semibold'>What is the purpose of react router?</h1>
                <h3 className='text-3xl'>React Router</h3>
                <p className='text-2xl'>Routing is a process in which a user is directed to different pages based on their action or request. <span className='text-gray-500'> ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.  </span>

                React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.</p>
             </div>
             <div className='border m-8 p-10 bg-red-100'>
                <h  className='text-3xl mb-4 font-semibold'>what is the work of context API?</h>

                <p className='text-2xl'>The React Context API is a way for a React app to effectively produce   global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

                Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.</p>
             </div>
             <div className='border  m-8 p-10 bg-red-100'>
               <h1  className='text-3xl mb-4 font-semibold'>What is the hook useRfe?</h1>
               <p className='text-2xl'>he useRef hook is the new addition in React 16.8. Before proceeding    to  this article there is a prerequisite to know about the ref in react.
                The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.
                 </p>
                 <h1  className='text-3xl text-center'>Syntax:  const refContainer = useRef(initialValue);</h1>
              </div>
             </div>
        </div>
    );
};

export default Blog;