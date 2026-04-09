import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import BlogList from '../components/BlogList';
import BlogForm from '../components/BlogForm';
import App from '../App';
const AppRoute = () => {
    let router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            children: [
                {
                    path: '',
                    element: <Home />
                },
                {
                    path: '/dashboard',
                    element: <Dashboard />
                },
                {
                    path: '/dashboard/new',
                    element: <BlogForm />
                },
                {
                    path: '/login',
                    element: <SignIn />
                },
                {
                    path: '/register',
                    element: <SignUp />
                },
                {
                    path: '/blog/:id',
                    element: <BlogList />
                },

            ]
        }
    ])

    return <RouterProvider router={router} />
}

export default AppRoute
