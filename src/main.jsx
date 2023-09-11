import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LayoutOne from './Layout/LayoutOne.jsx'
import Homepage from './Components/Homepage/Homepage.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import DynamicPage from './Components/HelpingCompo/DynamicPage/DynamicPage'


const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutOne></LayoutOne>,
    children: [
      {
        path: '/',
        element: <Homepage></Homepage>
      },
      {
        path: '/rooms/:id',
        element: <DynamicPage></DynamicPage>
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
        </RouterProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
