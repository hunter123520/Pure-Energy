import React , {useState,useEffect} from 'react'
import error_image from "../Images/Error.png"
import "../Styles/Redirect.css"
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const RedirectPage = () => {
    const [timeLeft, setTimeLeft] = useState(5);
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
useEffect(() => {
    if(timeLeft===0){
    //    console.log("TIME LEFT IS 0");
       navigate("/Home");
       setTimeLeft(null)
    }

    // exit early when we reach 0
    if (!timeLeft) return;

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {

      setTimeLeft(timeLeft - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);
  return (
    <div className='d-flex justify-content-around errorContainer'>
        <div className='d-flex flex-column align-items-center justify-content-center'>
            <div className='titleError'>
                {t("Error Wrong Page")}
                
            </div>
            <div className="redirectError">
            {t("Redirecting in")}  {timeLeft} {t("seconds")}

            </div>
        </div>
        <div className='ImageContainer'>
            <img src={error_image} alt="logo" />
        </div>
        
    </div>
  )
}

export default RedirectPage