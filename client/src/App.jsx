import './App.css'
import Dashboard from './Components/Dashboard/Dashboard'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Activity from './Components/Activity'

// import react router dom
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

// Define sub-routes for the Dashboard component
const dashboardRoutes = [
  {
    path: '/dashboard/firewall',
    element: <Activity />
  },
  {
    path: 'settings',
    element: <div>Settings Content</div>
  },
  {
    path: 'profile',
    element: <div>Profile Content</div>
  }
]

//create router 
const router = createBrowserRouter([
  {
    path: '/',
    element: <dir><Login /></dir>
  },
  {
    path: '/register',
    element: <dir><Register /></dir>
  },
  {
    path: '/dashboard',
    element: <Dashboard />,  // Dashboard serves as a parent for the sub-routes
    children: dashboardRoutes
  },
  {
    path: '*',
    element: <div>Not Found</div>
  }
])

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
