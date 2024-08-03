import React, { useEffect, useState } from 'react'
import "./rootLayout.css";
import { Link, Outlet } from 'react-router-dom';
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import useOnlineStatus from "../../utlis/useOnlineStatus";
import OfflineIndicator from "../../components/offlineStatus/OfflineIndicator.jsx"  ;
import Preloader from '../../components/preLoader/Preloader.jsx';


// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


const RootLayout = () => {

  const onlineStatus = useOnlineStatus();
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // Hide the preloader after 3 seconds (adjust the duration as needed)
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!onlineStatus) {
    return <OfflineIndicator />;
  }

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <div className='rootLayout'>
      {showPreloader && <Preloader />}
      {!showPreloader && (
          <>
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
        </>
        )}
      </div>
    </ClerkProvider>
  )
}

export default RootLayout