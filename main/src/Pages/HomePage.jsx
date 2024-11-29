import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/HomePage.css";
import { Button } from '@mui/material';
// import { BsArrowRight } from "react-icons/bs";
import introimg from "../Images/intro.jpg"
import display1 from "../Images/planet.jfif";
import { Link } from 'react-router-dom'
import React from 'react';
import RecyclingIcon from '@mui/icons-material/Recycling';
import CameraIndoorIcon from '@mui/icons-material/CameraIndoor';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import GroupsIcon from '@mui/icons-material/Groups';
import CardShow from '../Components/CardShow';
import lbb from "../Images/bb.png";
import TabsHolder from '../Components/TabsHolder';
import TabsHolder1 from '../Components/TabsHolder1';
import CustomCard from '../Components/CustomCard';
import event1 from "../Images/event1.jpg";
import event2 from "../Images/event2.jpg";
import event3 from "../Images/event3.jpg";
import bg from "../Images/bg.jpg";
import { useTranslation } from "react-i18next";
function HomePage() {
    const { t, i18n } = useTranslation();

    return (
        <div className='bb' style={{gap:"50px"}}>

        <Container fluid="x"  className='d-flex flex-column justify-content-center align-items-center intro-page' style={{backgroundImage:`url(${introimg})`}}>
        <span style={{color:"var(--main)",fontWeight:"200",fontSize:"24px"}}> 
            {t("Save The World")} 
            Increased Productivity & Save The World
            </span>
            <div className='intro-title text-center'>
                <span style={{color:"white"}}>  
                    {/* {t("Recycle Your Garbage")}   */}
                    Monitor Your Solar Panels
                    </span>
            </div>
            <div className='w-75 text-center mb-4' style={{color:"white"}}>
             {/* {t("Recycle Right can be your one-stop shop for all things recycling. We offer information on what can be recycled, how to recycle properly, and the benefits of recycling.")}  */}
             Keep a close eye on your solar panel system with our advanced monitoring solutions. Track performance, identify potential issues, and optimize your energy production—all from the comfort of your device.
            </div>
            
            <Link to='/Main' >
                <Button variant='contained' className='intro-button'> 
                    {/* {t("Recycle Now")} */}
                    Start Now
                     </Button>
            </Link>
        </Container>

        <Container  className='d-flex flex-column justify-content-center align-items-center six-page text-center'>
        <span style={{color:"var(--main)",fontWeight:"200",fontSize:"24px"}}> {t("So Much to do!")} </span>
            <div className='second-title text-center' style={{fontSize:"40px"}}>
                <span> {t("Different")}  <span style={{color:"var(--main)"}}>  {t("Benifits")}   </span>  {t("&")}   
                <span style={{color:"var(--main)"}}>  {t("Solutions")} </span> 
                 <span style={{color:"var(--main)"}}>  {t("To Discover")} .</span></span>
            </div>
            <div>
             {/* {t("Dive deeper into recycling! Discover surprising eco-benefits, explore easy solutions at home, and build a greener future, together, one step at a time.")}  */}
             Dive deeper into solar panels monitoring! Discover surprising eco-benefits, explore easy solutions at home, and build a greener future, together, one step at a time.
            </div>
            <div className='d-flex flex-row flex-wrap justify-content-center align-items-center h-100 w-100 mt-4' style={{gap:'15px'}}>
                <CardShow title= {t('Monitor')} text= {"Monitor your solar panels field by identifying up to 6 different panels states"} link={"/Recycle"} icon={<CameraIndoorIcon style={{fontSize:"80px"}}></CameraIndoorIcon>}/>
                <CardShow title= {t('Recycle')} text= {t('Recycling is now easy, you can recycle up to 12 different types of garbages at any field.')} link={"/Recycle"} icon={<RecyclingIcon style={{fontSize:"80px"}}></RecyclingIcon>}/>
                <CardShow title= {t('Assistant')} text= {t('You are still struggling in finding the right type of your garbage? use the Assistant bot to help you.')} link={"/Assistant"} icon={<SmartToyIcon style={{fontSize:"80px"}}></SmartToyIcon>}/>
                <CardShow title= {t('Industries')} text= {t('You want to inherit our model in your application or website? You can contact as to find more.')} link={"/Industries"} icon={<PrecisionManufacturingIcon style={{fontSize:"80px"}}></PrecisionManufacturingIcon>}/>
                <CardShow title= {t('Contact')} text= {t('If you have any questions or suggestions, you can talk to our team for a fast replying service.')} link={"/Contact"} icon={<GroupsIcon style={{fontSize:"80px"}}></GroupsIcon>}/>
            </div>
            
        </Container>
            
        <Container fluid="x" className='d-flex flex-row page-three'>
            <img src={display1} alt=""  className='img-left'/>
            <div className='d-flex flex-column justify-content-start align-items-start p-5 text-start w-50 right-area' style={{gap:"25px"}}>
                <div className='second-title text-start w-100' style={{fontSize:"40px"}}>
                    <span> <span style={{color:"var(--main)"}}>  {t("Contact")}  </span>  {t("Us with your")}  
                    <span style={{color:"var(--main)"}}>  {t("Ideas")}  </span>  {t("&")}  <span style={{color:"var(--main)"}}> 
                     {t("Suggestions")} .</span></span>
                </div>
                <div>
                 {/* {t("Got recycling ideas brimming? We want to hear them! Share your thoughts and suggestions to help us create a more sustainable future, together. Every voice counts in building a greener world, one brilliant idea at a time. Let's make recycling revolutionary!")}  */}
                 Got solar insights to share? Help us harness the power of the sun more efficiently. Share your ideas and experiences to improve solar panel monitoring and maintenance. Together, we can optimize solar energy production and contribute to a sustainable future. Let's innovate for a brighter tomorrow!
                </div>
                <Link to={"/Contact"} >
                <Button variant='outlined' className='intro-button'> {t("Contact us")} </Button>
            </Link>
            </div>
        </Container>

        <Container className='d-flex flex-column justify-content-center align-items-center fifth-page'>
        
            <div className='d-flex flex-row justify-content-center align-items-center rgb' style={{gap:"50px"}}>
                <div className='d-flex flex-column justify-content-start align-items-end  second-page-start'>
                <span style={{color:"var(--main)",fontWeight:"200",fontSize:"24px"}}> {t("Our Mission!")} </span>
                        <div className='second-title text-end'>
                        <span>  {t("We've a")} <span style={{color:"var(--main)"}}>   {t("Clear Objectives")} </span> 
                           {t("From this")} <span style={{color:"var(--main)"}}> {t("Tools")} </span></span>
                    </div>
                    <div className='w-75 content text-end'>
                     {/* {t("We're on a mission to revolutionize recycling and empower you to make a lasting impact. Our user-friendly tools with clear objectives guide you towards effective recycling practices, making a real difference, one recycled item at a time.")}  */}
                     Our user-friendly tools provide clear insights into your solar panel system’s performance, empowering you to maximize energy production and minimize environmental impact. With our advanced monitoring solutions, you can make a real difference, one watt at a time.

                    </div>
                </div>

                <div className='d-flex flex-row justify-content-start align-items-center w-50' style={{gap:"35px"}}>
                <img src={lbb} alt="" className='lbb-img'/>
                </div>
            </div>
        </Container>


        <Container>
        <div className='second-title text-end'>
                        <span> {t("What Can you")}  <span style={{color:"var(--main)"}}> 
                         {t("Detect")} 
                         </span></span>
                    </div>
            <TabsHolder1></TabsHolder1>
        </Container>

        <Container>
        <div className='second-title text-end'>
                        <span> {t("What Can you")}  <span style={{color:"var(--main)"}}> 
                         {t("Recycle in Addition")} 
                         </span></span>
                    </div>
            <TabsHolder></TabsHolder>
        </Container>
        

        <Container className='d-flex flex-column justify-content-center align-items-center'style={{gap:"15px", height:"700px"}} >
        <div className='second-title text-start w-100 h-100'>
                        <span> {t("Lastes")}  <span style={{color:"var(--main)"}}> 
                          {t("Events")} </span></span>
                    </div>
            <div className='d-flex flex-row justify-content-center align-items-center flex-wrap cdcont h-100'style={{gap:"35px"}}>
            <CustomCard icon={<img src={event2} alt=""  className='itemimg'/>} title= {t("In Scramble for Clean Energy, Europe Is Turning to North Africa")}  content= {t('North Africa')} content1= {t('In its quest for green energy, Europe is looking to North Africa, where vast solar and wind farms are proliferating and plans call for submarine cables that will carry electricity as far as Britain. But this rush for clean power is raising serious environmental concerns.')} border={false} swap={true} link="https://e360.yale.edu/features/africa-europe-solar-wind-power"></CustomCard>
            <CustomCard icon={<img src={event1} alt=""  className='itemimg'/>} title= {t("Algeria Panel Fields")}  content= {t("Algeria")}  content1= {t('Algeria’s state-owned power utility Sonelgaz revealed a list of bidders for a 2 GW solar tender launched in February. The selected bidders are poised to develop solar projects in 11 locations throughout the North African country with capacities ranging from between 80 MW and 220 MW..')} border={false} swap={true} link="https://energycapitalpower.com/algeria-renewable-energy-capacity-2035/"></CustomCard>
            <CustomCard icon={<img src={event3} alt=""  className='itemimg'/>} title= {t("Countries That Use the Most Solar Energy in 2024")}  content= {t('The World')} content1= {t('China leads the world in solar power generation, with 609,921 megawatts (MW) of installed capacity as of December 2023. That is more than four times the amount of solar installed than the second place United States, but both countries have about the same number of installed watts per person because China’s population is so much greater.')} border={false} swap={true} link="https://www.solarreviews.com/blog/where-is-solar-power-used-the-most"></CustomCard>

            </div>
        </Container>



        <Container fluid="x"  className='d-flex flex-column justify-content-center align-items-center intro-page' style={{backgroundImage:`url(${bg})`}}>
        <span style={{color:"var(--main)",fontWeight:"200",fontSize:"24px"}}> 
            {/* {t('Our Recycling Model')} */}
            Our Monitoring Model
            </span>
            <div className='intro-title text-center'>
                <span style={{color:"white"}}>
                     {t("We've Reached a Good Point")} 
                      </span>
            </div>
            <div className='w-75 text-center mb-4' style={{color:"white"}}>
             {/* {t("We've reached a tipping point in recycling!  Our innovative model, trained on a massive dataset of over 2,000 images, boasts an impressive 95% accuracy in identifying recyclable materials. But speed is key – and our model delivers lightning-fast results, empowering you to make informed recycling decisions in seconds.")}  */}
             We’ve reached a tipping point in solar energy efficiency! Our innovative model, trained on over 800 images of diverse solar panel installations, boasts an impressive accuracy in classifying various solar panel types and identifying potential issues. With rapid analysis and actionable insights, you can optimize your solar system’s performance and maximize energy production.
            Additionally, our platform can assist you in efficient recycling practices. Our AI-powered recycling assistant can accurately identify recyclable materials and provide real-time guidance, contributing to a greener future.
            </div>
            
            
        </Container>

        </div>
    );
}

export default HomePage