import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';

// data - theme="dark"
function App() {
  return (
      <div className='mx-w-[1440px] mx-auto'>
        <RouterProvider router={routes} />
      <Toaster/>
      </div>
  );
}

export default App;
