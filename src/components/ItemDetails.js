import React, { useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import Header from './Header';
import LeftSideNav from './LeftSideNav';


class ComponentToPrint extends React.Component {
  render() {
    return (
      <div className='hidden'>
        <div style={{ fontSize: "40px", color: "green" }}>
          Lorem ipsum dolor sit amet,
        </div>
        <div style={{ color: "blue" }}>
          Characteristics of active learning 1. You look for ways of being more
          involved in what you are learning
        </div>
      </div>
    );
  }
}


const ItemDetails = () => {
    const itemData = useLoaderData();
  const { img, name, description, price } = itemData;

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  /* 
    import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import { ComponentToPrint } from './ComponentToPrint';

const Example = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};
  */

  return (
    <div>
        <Header></Header>
        <div className='flex flex-row'>
          <div className='basic-1/4 left-side-category'>
            <LeftSideNav></LeftSideNav>
          </div>
          <div className='basic-3/4 bg-gray-50 item-details'>
          <ComponentToPrint ref={componentRef} />
            <div>
              <h2 className="text-3xl mt-8 font-bold tracking-tight text-center sm:text-5xl dark:text-gray">{name}</h2>
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
                  <div>
                    <h5 className='mb-3 text-3xl font-extrabold leading-none sm:text-4xl'>
                    {name}
                    </h5>
                    <button
                    onClick={handlePrint}
                      type='submit'
                      className='inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none'
                    >
                      Print PDF
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
                    Price: $ {price}
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