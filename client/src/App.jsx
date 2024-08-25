import './App.css'
import Dashboard from './Components/Dashboard/Dashboard'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'

// import react router dom
import{
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

//create router 
const router = createBrowserRouter([
  {
    path: '/',
    element: <dir><Login/></dir>
  },
  {
    path: '/register',
    element: <dir><Register/></dir>
  },
  {
    path: '/dashboard',
    element: <dir><Dashboard/></dir>
  }
])

function App() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
