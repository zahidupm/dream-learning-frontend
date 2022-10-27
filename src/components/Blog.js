import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const Blog = () => {
  const {theme} = useContext(ThemeContext)
    return (
      <div id={theme} className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto t-white">
            Project Blog
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Webb developing is not a easy thing. It will be easy and enjoyable if anyone know those question. It will make more fun!
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl sm:mx-auto">
        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">
              What is CORS?
              </p>
              <p className="text-gray-700">
              CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API. In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
              Why are you using firebase? What other options do you have to implement authentication?
              </p>
              <p className="text-gray-700">
              Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
              <br />
                <ul className='font-semibold'>
                  <li>1 Password-based authentication</li>
                  <li>2 Multi-factor authentication</li>
                  <li>3 Certificate-based authentication</li>
                  <li>4 Biometric authentication</li>
                  <li>5 Token-based authentication</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">
              How does the private route work?
              </p>
              <p className="text-gray-700">
              PrivateRoute component is the blueprint for all private routes in the application. If the user is logged in, go on and display the component in question; otherwise, redirect the user to sign-in page. Additionally, we can define the logic of isLogin utility function separately in utils folder.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
              What is Node? How does Node work?
              </p>
              <p className="text-gray-700">
              Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                <br />
                <br />
                <b>Working of Node.js:</b> Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Blog;