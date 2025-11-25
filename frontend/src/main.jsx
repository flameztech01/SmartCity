import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';

import Homepage from './screens/Homepage.jsx';



const router = createBrowserRouter([
  {path:'/', element: <App />, children: [
    {index: true, element: <Homepage />}
  ]}
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>
)
