import React from 'react'
import "./rootLayout.css";
import { Link, Outlet } from 'react-router-dom';
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';


// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <div className='rootLayout'>
          <header>
              <Link to="/" className='logo'>
                  <img src='/TJ_LOGO.png'/>
                  <span>AI CHAT</span>
              </Link>
              <div className="user">
                {/* <SignedOut>
                  <SignInButton />
                </SignedOut>  beacuse we are protecting our route*/}
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
          </header>
          <main>
              <Outlet/>
          </main>
      </div>
    </ClerkProvider>
  )
}

export default RootLayout