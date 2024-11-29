import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/HomePage.css";
import planet from "../Images/planet.jfif";
import res from "../Images/res.jfif";
import intro_img from "../Images/intro_img.png";
// import { BsArrowRight } from "react-icons/bs";


import { Link } from 'react-router-dom'
import React from 'react';


function HomePage() {


    return (
        <div className='bb'>
            <Container fluid="xl" className='con-intro'>
                <div className='intro-container center'>
                    <div className='intro-text-container'>
                        <div className='intro-title'>
                            <span>RECYLE YOUR GARBAGE</span>
                        </div>
                        <div className='intro-content'>

                            <span>Recycle Right can be your one-stop shop for all things recycling. We offer information on what can be recycled, how to recycle properly, and the benefits of recycling. We also have a directory of recycling centers and programs in your area.</span>
                        </div>

                        <div className='intro-btn-container'>
                            <Link to='/Recycle' className="btn-link" >
                                <span className='btn-text'>
                                    <span>Recycle now</span>
                                </span>
                                {/* // <HiOutlineArrowRightCircle className='icone'/> */}
                            </Link>
                        </div>
                    </div>
                    <div className='intro-img'>
                        <img src={intro_img} alt="logo" className='imgc'/>
                    </div>
                </div>
            </Container>
            <Container fluid="xl" >
                <div className="sec-main">
                    <div className="sec-cont">
                        <span className='sec-nb'>
                            12+
                        </span>
                        <span className='sec-dc'>
                            Garbage Types to Recycle
                        </span>
                    </div>
                    <div className="sec-cont">
                        <span className='sec-nb'>
                            Infos
                        </span>
                        <span className='sec-dc'>
                            In each garbage type for recycling
                        </span>
                    </div>
                    <div className="sec-desc">
                        <span className='sec-nc'>
                            Reachness and Informative Advices
                        </span>
                    </div>
                </div>
            </Container>
            <Container fluid="xl" className='container desc1 d-flex justify-content-within align-items-center' >
                <div className='imgcont w-50' >
                <div className="layer ">
                    <img className='img1' src={res} alt="" /> 
                </div>
                
                    
                </div>
                <div className='desco1 w-50'>
                    <div className='descotitle'>
                    Find the type of your <span style={{color: "#178a9f"}}>Garbage</span> 
                    </div>
                    <div className='descocontent'>
                    Ever stare at a piece of trash and wonder, "Can this be recycled?" We've all been there. That's why we created a one-of-a-kind AI model to help you quickly and accurately identify your garbage type!


                     <br></br> <br></br>
                     Simply snap a picture of your item (or enter a description), and our intelligent system will analyze it to determine the category. It's that easy!
                     Our AI can identify a wide range of garbage types, By using our tool, you can:
                    Reduce landfill waste, 
                    Increase recycling rates, 
                    Improve your environmental impact, 
                    Become a recycling pro!.
                    <br></br> <br></br>
                    Stop the confusion! Find your garbage type today and take the first step towards a more sustainable future.
                    </div>
                </div>
            </Container>

            <Container fluid="xl" className='container desc1 d-flex justify-content-within align-items-center'>
                <div className='desco1 w-50' style={{paddingRight:"2rem",paddingLeft:"0"}}>
                    <div className='descotitle'>
                    Making the <span style={{color: "#578a25"}}>Planet </span> much <span style={{color: "#178a9f"}}>Better </span>
                    </div>
                    <div className='descocontent'>
                    Welcome to a community dedicated to taking action for a healthier planet! We all know the Earth faces environmental challenges, but even small changes in our daily lives can make a significant difference. This is your one-stop shop for actionable tips, inspiring stories, and resources to empower you to be a part of the solution.
                     <br></br> <br></br>
                     Remember, every action counts!  By joining our community and making small changes, together we can create a ripple effect of positive environmental change.
                     <br></br> <br></br>
                     Let's work towards a brighter future for our planet!
                    </div>
                </div>
                <div className='imgcont w-50' >
                <div className="layer2"></div>
                    <img className='img2' src={planet} alt=""  />
                    
                </div>
                
            </Container>

            <Container fluid="xl" className='con-main'>

                <div className='main-container'>

                    <div className='main-content'>
                        <div className="tr-desc">
                            <span className='tr-nc'>
                            Acknowledge
                            </span>
                        </div>
                        <span>
                            This demo website is presented in the GAIA Hackathon Act 4 in LabLab.me, we wanted thank them for giving us the chance to present this work
                        </span>
                        
                    </div>

                </div>
            </Container>

            

        </div>
    );
}

export default HomePage