import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Header from './Header';
import LeftSideNav from './LeftSideNav';

const ItemDetails = () => {
    const itemData = useLoaderData();
  const { img, name, description, price } = itemData;

  return (
    <div>
        <Header></Header>
        <div className='flex flex-row'>
          <div className='basic-1/4'>
            <LeftSideNav></LeftSideNav>
          </div>
          <div className='basic-3/4 bg-gray-50 item-details'>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray">{name}</h2>
            </div>
                <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div className='flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto'>
              <div className=' lg:w-1/2'>
                <img
                  src={img}
                  alt=''
                  className='object-cover w-full  h-80 lg:h-full'
                />
              </div>
              <div className='flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2'>
                <div>
                  <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400'>
                    Brand new
                  </p>
                </div>
                <div>
                  <div>
                    <h5 className='mb-3 text-3xl font-extrabold leading-none sm:text-4xl'>
                    {name}
                    </h5>
                    <button
                      type='submit'
                      className='inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none'
                    >
                      Download PDF
                    </button>
                  </div>
                  {/* <a href={pdf && Object.values(pdf)[0]}>
                    <button
                      type='submit'
                      className='inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none'
                    >
                      {pdf ? 'Download PDF' : 'Not Available'}
                    </button>
                  </a> */}
                </div>
                <p className='mb-5 text-gray-900'>{description}</p>
                
                <div className='flex space-between premium'>
                  <p className='inline-flex items-center font-semibold transition-colors duration-200 text-blue-400 hover:text-deep-purple-800'>
                    Price: {price}
                  </p>
                </div>
                <div className='mt-4'>
                <Link to='/premium'>
                    <button className='inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none'>Get premium access <FaArrowRight className='ml-2' /></button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
};

export default ItemDetails;