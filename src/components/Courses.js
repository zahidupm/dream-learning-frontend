import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ThemeContext } from '../App';
import Footer from './Footer';
import Header from './Header';
import Item from './Item';
import LeftSideNav from './LeftSideNav';

const Courses = () => {
    const itemsData = useLoaderData();
    const {theme} = useContext(ThemeContext)

    return (
        <div id={theme}>
            <Header></Header>
            <div className='flex flex-row md:mx-auto'>
                <div className='basic-1/4 left-side-category'>
                    {/* side bar */}
                    <LeftSideNav></LeftSideNav>
                </div>
                {/* course item */}
                <div className='basis-3/4 right-side-category bg-gray-50' id={theme}>
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