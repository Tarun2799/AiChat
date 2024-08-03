import React from 'react'
import "./dashboard.css";
// import useOnlineStatus from "../../utlis/useOnlineStatus";
// import OfflineIndicator from "../../components/offlineStatus/OfflineIndicator.jsx"  ;

const Dashboard = () => {

  // const onlineStatus = useOnlineStatus();

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const text =  e.target.text.value;
    if(!text) return

    await fetch("http://localhost:3000/api/chats",{
      method: "POST",
      headers:{
          "Content-Type":"application/json"
      },
      body: JSON.stringify({text})
  })
  }

  return (
    <div className='dashboard'>
      <div className="texts">
        <div className="logo">
          <img src="/TJ_LOGO.png" alt="" />
          <h1>TJ AI</h1>
        </div>
        <div className="options">
          <div className="option">
            <img src="/chat1.png" alt="" />
            <span>Create a New Chat</span>
          </div>
          <div className="option">
            <img src="/image2.png" alt="" />
            <span>Analyze Images</span>
          </div>
          <div className="option">
            <img src="/code2.png" alt="" />
            <span>Help me with my Code</span>
          </div>
        </div>
      </div>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <input type="text" name="text" placeholder="Ask me anything..." />
          <button>
            <img src="/arrow.png" alt="" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Dashboard