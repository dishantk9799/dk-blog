import { Outlet } from 'react-router';
import Navbar from './components/Navbar'
import { useTheme } from './context/ThemeContext'
import { ToastContainer } from 'react-toastify';

const App = () => {
  const { theme } = useTheme();
  return (
    <div style={{ fontFamily: "Nunito Medium" }} className={`w-full min-h-screen ${theme ? 'bg-zinc-950 text-white' : ' bg-zinc-200 text-black'}`}>
      <Navbar />
      <Outlet />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={true}
        closeButton={false}
        toastClassName={() =>
          "bg-zinc-800 flex text-sm items-center text-white rounded-xl px-4 py-3"
        }
        bodyClassName="text-xs" />
    </div>
  )
}

export default App
