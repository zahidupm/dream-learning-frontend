import { createBrowserRouter } from "react-router-dom";
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import Blog from "../components/Blog";
import Courses from "../components/Courses";
import ErrorPage from "../components/ErrorPage";
import Faq from "../components/Faq";
import Home from "../components/Home";
import ItemDetails from "../components/ItemDetails";
import Premium from "../components/Premium";
import Main from "../layout/Main";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {path: '/', element: <Home></Home>},
            {path: '/home', element: <Home></Home>},
            {path: '/login', element: <Login></Login>},
            {path: '/register', element: <Register></Register>},
            {path: '/faq', element: <Faq></Faq>},
            {path: '/blog', element: <Blog></Blog>},
            {path: '/premium', element: <Premium></Premium>},
        ]
    },
    {
        path: '/courses', 
        element: <Courses></Courses>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: () => fetch(`https://learning-platform-nine.vercel.app/all`),
    }, 
    {
        path: '/item/:id',
        element: <ItemDetails></ItemDetails>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: ({params}) => {
            return fetch(`https://learning-platform-nine.vercel.app/item/${params.id}`)
        }
    }
])

export default routes;