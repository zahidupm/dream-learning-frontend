import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Item from './Item';
import LeftSideNav from './LeftSideNav';

const Courses = () => {
    const itemsData = useLoaderData();
    return (
        <div>
            <Header></Header>
            <div className='flex flex-row'>
                <div className='basic-1/4'>
                    {/* side bar */}
                    <LeftSideNav></LeftSideNav>
                </div>
                {/* course item */}
                <div className='basis-3/4 bg-gray-50'>
                    {/* <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                        <div className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-1'>
                            {
                                itemsData.map(item => <Item key={item.id} item={item}></Item>)
                            }
                        </div>
                    </div> */}

                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
                            {
                                itemsData.map(item => <Item key={item.id} item={item}></Item>)
                            }
                        </div>
                    </div>
                </div>

            </div>
                <Footer></Footer>
        </div>
    );
};

export default Courses;