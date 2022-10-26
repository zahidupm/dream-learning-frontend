import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Item = ({item}) => {
    const {name, img, id, description} = item;
    return (
        <div>
            {/* <Link to={`../item/${id}`} aria-label='View Item'>
            <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
                <img
                className='object-cover w-full h-56 md:h-64 xl:h-80'
                src={img}
                alt=''
                />
                <div className='absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100'>
                <p className='mb-4 text-lg font-bold text-gray-100'>{name}</p>
                <br />
                <p className='text-sm tracking-wide text-gray-300'>{''}</p>
                <br />
                <p className='text-sm tracking-wide text-gray-300'>Price: {''}</p>
                </div>
            </div>
            </Link> */}
            {/* <Link to={`../item/${id}`}> */}
                <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                    <div className="relative p-5 bg-white rounded-sm">
                        <div className="flex flex-col lg:items-center lg:flex-row">
                            <div className="flex items-center justify-center h-64 w-64 mb-4 mr-2 lg:mb-0">
                            <img className=" h-48 w-full p-2 text-deep-purple-accent-400" src={img} alt="" />
                            </div>
                        </div>
                            <h6 className="font-bold text-xl leading-5 mb-2">{name}</h6>
                        <p className="mb-2 text-sm text-gray-900">
                            {description.substring(0, 100) + ' ...'}
                        </p>
                        <div className='flex justify-between  text-blue-600'>
                        <Link
                            to={`../item/${id}`}
                            aria-label=""
                            className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Learn more
                        </Link>
                        <Link to={`../item/${id}`}>
                            <FaArrowRight></FaArrowRight>
                        </Link>
                        </div>
                    </div>
                </div>
            {/* </Link> */}
        </div>
    );
};

export default Item;