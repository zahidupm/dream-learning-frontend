import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth.context';

const Register = () => {
    const {createUser} = useContext(AuthContext);

    const [userInfo, setUserInfo]= useState({
        email: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    

  return (
    <div className='flex justify-center bg-gray-50 items-center pt-8'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-1 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Create Account</h1>
          <p className='text-sm text-gray-400'>Welcome! Please Enter Your Information</p>
        </div>
        <form
        onSubmit={handleSubmit}
          noValidate=''
          action=''
          className='space-y-12 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Name*
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter Your Name'
                required="required"
                className='w-full px-3 py-2 border rounded-sm learning-input border-gray-400 focus:border-blue-400 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address*
              </label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Enter Your Email Here'
                required="required"
                className='w-full px-3 py-2 border rounded-sm learning-input border-gray-400 focus:border-blue-400 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between mb-2'>
                <label htmlFor='password' className='text-sm'>
                  Password*
                </label>
              </div>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='*******'
                required="required"
                className='w-full px-3 py-2 border rounded-sm learning-input border-gray-400 focus:border-blue-400 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
          </div>
          <div className='space-y-2'>
            <div>
              <button
                type='submit'
                className='w-full px-8 py-3 font-semibold rounded-md bg-blue-700 hover:bg-blue-900 hover:text-white text-gray-100'
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400 pb-4'>
            Signup with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div data-v-7db52544="" data-v-06e668d2="">
            <button data-v-7db52544="" className="flex w-full justify-center items-center border border-gray-300 rounded px-4 py-2 mb-5">
                <svg data-v-7db52544="" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3"><g data-v-7db52544="" clipPath="url(#clip0_5157_4596)"><path data-v-7db52544="" d="M24.266 12.2765C24.266 11.4608 24.1999 10.6406 24.0588 9.83813H12.74V14.4591H19.2217C18.9528 15.9495 18.0885 17.2679 16.823 18.1056V21.104H20.69C22.9608 19.014 24.266 15.9274 24.266 12.2765Z" fill="#4285F4"></path> <path data-v-7db52544="" d="M12.7401 24.0008C15.9766 24.0008 18.7059 22.9382 20.6945 21.1039L16.8276 18.1055C15.7517 18.8375 14.3627 19.252 12.7445 19.252C9.61388 19.252 6.95946 17.1399 6.00705 14.3003H2.0166V17.3912C4.05371 21.4434 8.2029 24.0008 12.7401 24.0008Z" fill="#34A853"></path> <path data-v-7db52544="" d="M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z" fill="#FBBC04"></path> <path data-v-7db52544="" d="M12.7401 4.74966C14.4509 4.7232 16.1044 5.36697 17.3434 6.54867L20.7695 3.12262C18.6001 1.0855 15.7208 -0.034466 12.7401 0.000808666C8.2029 0.000808666 4.05371 2.55822 2.0166 6.61481L6.00264 9.70575C6.95064 6.86173 9.60947 4.74966 12.7401 4.74966Z" fill="#EA4335"></path></g> <defs data-v-7db52544=""><clipPath data-v-7db52544="" id="clip0_5157_4596"><rect data-v-7db52544="" width="24" height="24" fill="white" transform="translate(0.5)"></rect></clipPath></defs></svg>

        Google 
  </button> 
  <button data-v-7db52544="" className="flex w-full justify-center items-center border border-gray-300 rounded px-4 py-2 mb-5">
        <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 32 32'
              className='w-5 h-5 fill-current'
            >
              <path d='M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z'></path>
        </svg>

    Github
  </button></div>

        <p className='px-6 text-sm text-center text-gray-400'>
          Already have an account yet?{' '}
          <Link to='/login' className='hover:underline text-gray-600'>
            Sign In
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default Register