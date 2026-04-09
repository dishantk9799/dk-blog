import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BlogProvider } from './context/BlogContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import AppRoute from './routes/AppRoute.jsx'

createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <AuthProvider>
            <BlogProvider>
                <AppRoute />
            </BlogProvider>
        </AuthProvider>
    </ThemeProvider>
)
