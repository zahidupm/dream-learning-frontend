import React, { useContext } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../App';

const Home = () => {
  const {theme} = useContext(ThemeContext);
  
    return (
      <div className="mb-16" id={theme}>
      <div className="bg-gray-100" id={theme}>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto" id={theme}>
              Welcome to <span className='text-blue-500'>Dream Learning</span> Online Platform
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              This is the biggest Computer Science and Engineering online learning platform in this land. We all are committed to give you proper direction and proper guideline.
            </p>
          </div>
          <div className="flex items-center t-white sm:justify-center" id={theme}>
            <Link to='/premium'>
            <button
              type="submit"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-orange-400 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none b-dark"
            >
              Get started 
            </button>
            </Link>
            <Link
              to="/courses"
              aria-label=""
              className="inline-flex items-center font-semibold text-blue-400 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Learn more <FaArrowRight className='ml-2'></FaArrowRight>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative px-4 sm:px-0">
        <div className="absolute inset-0 bg-gray-100 h-1/2" id={theme} />
        <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md b-dark" id={theme}>
          <div className="inline-block p-8 text-center">
            <div id={theme} className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <p className="font-bold tracking-wide text-gray-800">
              Make it better
            </p>
          </div>
          <div className="inline-block p-8 text-center">
            <div id={theme} className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <p className="font-bold tracking-wide text-gray-800">
              Do it faster
            </p>
          </div>
          <div className="inline-block p-8 text-center">
            <div id={theme} className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <p className="font-bold tracking-wide text-gray-800">
              Working harder
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Home;