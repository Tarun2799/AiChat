import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './routes/homepage/HomePage.jsx'
import Dashboard from './routes/dashboard/Dashboard.jsx'
import ChatPage from './routes/chatPage/ChatPage.jsx'
import RootLayout from './layouts/rootLayout/RootLayout.jsx'
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout.jsx'
import SignInPage from './routes/signInPage/SignInPage.jsx'
import SignUpPage from './routes/signUpPage/SignUpPage.jsx'
import ContactPage from './components/contact/ContactPage.jsx'





const router = createBrowserRouter([
  {
    element: <RootLayout/>,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "/sign-in/*",
        element: <SignInPage/>,
      },
      {
        path: "/sign-up/*",
        element: <SignUpPage/>,
      },
      {
        path: "/contact",
        element: <ContactPage/>,
      },
      {
        element: <DashboardLayout/>,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard/>,
          },
          {
            path: "/dashboard/chats/:id",
            element: <ChatPage/>,
          },
        ]
      }
    ],
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
