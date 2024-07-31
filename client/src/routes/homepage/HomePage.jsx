import { Link } from "react-router-dom";
import "./homepage.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
// import useOnlineStatus from "../../utlis/useOnlineStatus";
// import OfflineIndicator from "../../components/offlineStatus/OfflineIndicator.jsx"  ;
// import videoBg from "./public/f6.mp4";

const HomePage = ()=>{

    const [typingStatus, setTypingStatus] = useState("human1");

    // const onlineStatus = useOnlineStatus();
    // console.log(onlineStatus)

    return  (
        <div className="homepage">
            {/* <img src="/orbital.png" alt="" className="orbital"/> */}
            <div className="left">
                <h1>TJ AI</h1>
                <h2>Charge your productivity and work</h2>
                <h3>Embrace challengs as opportunities, harness your passion, and let creativity drive your productivity forward.</h3>
                <Link to="/dashboard">Get Started</Link>
            </div>
            <div className="right">
                <div className="imgContainer">
                    <div className="bgContainer">
                        <div className="bg">
                        <video src="./f6.mp4" autoPlay loop muted disablePictureInPicture={true}/>
                        </div>
                    </div>
                    <img src="/GRROBO.png" alt="" className="robo"/>
                    <div className="chat">
                        <img src={typingStatus === "human1" ? "./human1.jpeg" : typingStatus === "human2" ? "./human2.jpeg" : "./GRROBO.png"} alt="" />
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Human: We produce food for Mice',
                                2000, () => {
                                    setTypingStatus("bot");
                                }, // wait 2s before replacing "Mice" with "Hamsters"
                                'Bot: We produce food for Hamsters',
                                2000, () => {
                                    setTypingStatus("human2");
                                },
                                'Human2: We produce food for Guinea Pigs',
                                2000, () => {
                                    setTypingStatus("bot");
                                },
                                'Bot: We produce food for Chinchillas',
                                2000, () => {
                                    setTypingStatus("human1");
                                },
                            ]}
                            wrapper="span"
                            repeat={Infinity}
                            cursor={true}
                            omitDeletionAnimation={true}
                        />
                    </div>
                </div>
            </div>
            <div className="terms">
                <img src="./TJ_LOGO.png" alt="" />
                <div className="links">
                    <Link to="/" >Terms of Service</Link>
                    <span>|</span>
                    <Link to="/" >Privacy Policy</Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage;