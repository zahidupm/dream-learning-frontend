import { createBrowserRouter } from "react-router-dom";
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import Blog from "../components/Blog";
import Courses from "../components/Courses";
import Faq from "../components/Faq";
import Home from "../components/Home";
import Main from "../layout/Main";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {path: '/', element: <Home></Home>},
            {path: '/home', element: <Home></Home>},
            {path: '/login', element: <Login></Login>},
            {path: '/register', element: <Register></Register>},
            {path: '/courses', element: <Courses></Courses>},
            {path: '/faq', element: <Faq></Faq>},
            {path: '/blog', element: <Blog></Blog>},
        ]
    }
])

export default routes;