import { useEffect, useState } from "react";

const useOnlineStatus = ()=>{


    const [ onlineStatus, setOnlineStatus ] = useState(navigator.onLine);


    useEffect(()=>{

        const handleOnline = () => setOnlineStatus(true);
        const handleOffline = () => setOnlineStatus(false);

        window.addEventListener("offline", handleOffline);

        window.addEventListener("online", handleOnline);

        // CleanUp functions , to avoid memory leaks
        return () =>{
            window.removeEventListener('online', handleOnline);

            window.removeEventListener('offline', handleOffline);

        }
    },[])

    return onlineStatus;
}

export default useOnlineStatus;