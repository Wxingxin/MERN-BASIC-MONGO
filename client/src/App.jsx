import React from 'react'
import User from './getUser/User'
import AddUser from './adduser/AddUser'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'

const App = () => {
  const route = createBrowserRouter([
    {
      path: '/',
      element:<User />
    },
    {
      path:'/add',
      element:<AddUser />
    }
  ])
  return (
    <div className='App'>
      <RouterProvider router={route}></RouterProvider>
    </div>
  )
}

export default App
