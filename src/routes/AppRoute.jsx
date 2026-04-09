import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import BlogList from '../components/BlogList';
import BlogForm from '../components/BlogForm';
import App from '../App';
import ProtectedAuth from './ProtectedAuth';
import ProtectedDashboard from './ProtectedDashboard';
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
                    element: (
                        <ProtectedDashboard>
                            <Dashboard />
                        </ProtectedDashboard>
                    )
                },
                {
                    path: '/dashboard/new',
                    element: (
                        <ProtectedDashboard>
                            <BlogForm />
                        </ProtectedDashboard>
                    )
                },
                {
                    path: '/login',
                    element: (
                        <ProtectedAuth>
                            <SignIn />
                        </ProtectedAuth>
                    )
                },
                {
                    path: '/register',
                    element: (
                        <ProtectedAuth>
                            <SignUp />
                        </ProtectedAuth>
                    )
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
