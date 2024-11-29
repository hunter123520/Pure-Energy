import React , {useState,useEffect} from 'react'
import ChatComp1 from '../Components/ChatComp1'
import "../Styles/Recycle.css"
import Uploader from '../Components/Uploader'
import APIService from '../Api/APIService'
import { CircularProgress } from "@mui/material";
import Container from 'react-bootstrap/Container';
import Bird from "../Images/Bird.jfif"
import Dusty from "../Images/Dusty.jfif"
import Clean from "../Images/Clean.jfif"
import elect from "../Images/Electrical-damage.jfif"
import physic from "../Images/Physical-Damage.jfif"
import snow from "../Images/Snow-Covered.jfif"



import Bird1 from "../Images/Bird1.jfif"
import Bird2 from "../Images/Bird2.jfif"
import Bird3 from "../Images/Bird3.jfif"
import Bird4 from "../Images/Bird4.jfif"

import Clean1 from "../Images/Clean1.jfif"
import Clean2 from "../Images/Clean2.jfif"
import Clean3 from "../Images/Clean3.jfif"
import Clean4 from "../Images/Clean4.jfif"

import Dust1 from "../Images/Dust1.jfif"
import Dust2 from "../Images/Dust2.jfif"
import Dust3 from "../Images/Dust3.jfif"
import Dust4 from "../Images/Dust4.jfif"

import elect1 from "../Images/elect1.jfif"
import elect2 from "../Images/elect2.jfif"
import elect3 from "../Images/elect3.jfif"
import elect4 from "../Images/elect4.jfif"

import physic1 from "../Images/physic1.jfif"
import physic2 from "../Images/physic2.jfif"
import physic3 from "../Images/physic3.jfif"
import physic4 from "../Images/physic4.jfif"

import snow1 from "../Images/snow1.jfif"
import snow2 from "../Images/snow2.jfif"
import snow3 from "../Images/snow3.jfif"
import snow4 from "../Images/snow4.jfif"

import { useTranslation } from "react-i18next";
import emp from "../Images/emp1.png";
import full from "../Images/full1.png";
const images = [
    Bird,
    Dusty,
    Clean,
    elect,
    physic,
    snow,
]
const Resimages = [
    [Bird1,Bird2,Bird3,Bird4],
    [Clean1,Clean2,Clean3,Clean4],
    [Dust1,Dust2,Dust3,Dust4],
    [elect1,elect2,elect3,elect4],
    [physic1,physic2,physic3,physic4],
    [snow1,snow2,snow3,snow4],
]




const Monitor = () => {
    // const [img,setImg] = useState([]);
    const [output, setoutput] = useState("");
    const [waiting, setWaiting] = useState(false);
    const [showIndex,setShowIndex] = useState(0)
    const [img,setimg] = useState(null);
    const { t, i18n } = useTranslation();

    const Infos = [
        {
          title: "Bird-Drop",
          what: "Bird droppings create localized shading on solar panels, blocking sunlight and reducing overall efficiency. Over time, these droppings can harden and become difficult to remove, leading to potential damage to the panel surface if not cleaned properly.",
          cause: "Birds tend to perch or fly over solar panels, especially in areas with trees, open fields, or buildings nearby that attract birds. The open, flat surface of solar panels is often an appealing resting spot for birds.",
          clean: "Gently scrub the affected area with a soft cloth or sponge using mild, non-abrasive soap mixed with water. For hardened spots, allow water to soak the area before cleaning to avoid scratching the panel.",
          save: "Install bird deterrents like anti-perch spikes, reflective objects, or ultrasonic repellents around the panels to discourage birds from landing on them. Keeping nearby trees trimmed can also help minimize bird presence."
        },
        {
          title: "Dust",
          what: "Dust accumulation on solar panels forms a thin layer that obstructs sunlight, significantly reducing energy production, especially in dry and dusty climates. This layer can worsen over time, leading to more frequent cleanings if left unchecked.",
          cause: "Wind, pollution, and nearby construction sites can contribute to dust settling on the panels. Rural and desert areas are especially prone to heavy dust accumulation due to dry conditions and wind patterns.",
          clean: "Rinse the panels with water, preferably using a hose with a gentle spray setting. For stubborn dust or grime, use a soft brush or sponge. Avoid high-pressure washers, as they could damage the panel seals.",
          save: "Implement regular cleaning schedules, particularly in high-dust areas. Installing low barriers or windbreaks around the installation site can help reduce dust deposition from nearby sources."
        },
        {
          title: "Clean",
          what: "The panel is free from visible contaminants, operating at its maximum efficiency, and able to absorb the optimal amount of sunlight.",
          cause: "Routine maintenance and favorable environmental conditions help keep the panels clean. Rain can also naturally wash away some of the dirt and dust from the panel surface.",
          clean: "No cleaning is necessary, as the panel is already in optimal condition.",
          save: "Maintain regular inspections to ensure panels remain clean. If panels are in a dust-prone area, more frequent checks and occasional cleaning may be beneficial."
        },
        {
          title: "Electrical Damage",
          what: "Electrical damage to solar panels, such as issues with wiring, connectors, or junction boxes, can result in poor performance, irregular energy output, or complete failure in some sections of the panel array.",
          cause: "Electrical damage can result from voltage spikes, lightning strikes, corrosion, or manufacturing defects. Improper handling during installation or maintenance may also lead to loose connections or broken circuits.",
          clean: "Electrical components require specialized inspection. Damaged parts, like wiring or connectors, should be repaired or replaced by a qualified technician. Avoid any DIY fixes as they could cause more damage.",
          save: "Install surge protectors to prevent overvoltage damage, especially in areas prone to lightning. Regularly inspect electrical connections and replace damaged components promptly to maintain panel efficiency."
        },
        {
          title: "Physical Damage",
          what: "Physical damage includes cracks, scratches, and other structural impacts on the panel’s surface, leading to a reduction in efficiency and possible further degradation over time.",
          cause: "Severe weather conditions like hail, debris from storms, falling branches, and even vandalism can cause physical damage. Improper handling during installation or maintenance may also contribute to this issue.",
          clean: "Damaged panels may need to be replaced if the cracks or scratches are significant. For minor surface damage, special resins can sometimes be applied to seal the area, but professional advice is recommended.",
          save: "Use protective covers or barriers around the installation, especially in high-risk weather areas. Inspect panels after storms or high-wind events to address potential issues early."
        },
        {
          title: "Snow Covered",
          what: "Snow covering creates a complete blockage on solar panels, drastically reducing energy output, as sunlight cannot penetrate the snow layer. Prolonged snow coverage can lead to downtime in energy production during winter months.",
          cause: "Snowfall during winter months or in high-altitude regions leads to snow accumulation on the flat surfaces of solar panels, especially on non-tilted installations.",
          clean: "Gently remove the snow with a soft brush or specialized snow rake, avoiding sharp tools that could scratch the surface. For thick ice, it’s best to let the sun naturally melt it rather than risk damage.",
          save: "Install panels at a steeper angle to help snow slide off naturally, or consider heating elements designed to melt snow on solar panels in extremely snowy regions."
        }
      ];
      






    const handleSubmit = (image) => {
        setWaiting(true);
        APIService.monitor({"files":image})
          .then((response) => {
            setoutput(response["output"]);
            setWaiting(false);
            console.log(response)
            var prediction = Number(response["output"]);
            setShowIndex(prediction)
            
          })
          .catch((error) => console.log("error", error));
    //     setoutput("qsdqs");
    //    setWaiting(false);
      };
      const handleReset = () => {
      }
     const getBase64 = (file, cb) =>{
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }
  return (
    <>
    
    {/* <div style={{width:"100%",textAlign:"center",marginTop:"25px",paddingLeft:50,paddingRight:50}}>
            The Model is out of service right now because of the deployement limitations, However the site will predict a random type for further review
        </div> */}
    <div className='d-flex justify-content-around errorContainer ' >
        
        <Uploader
        full={full}
        emp={emp}
        cond1={true}
        Btncontent={"Monitor"}
        handleChange={(file) => {


            var fr = new FileReader();
              fr.onload = function () {
                const res =  btoa(fr.result)
                setimg(res)
                handleSubmit(res) 
                
              };
    
    
              fr.readAsBinaryString(file);

        }}
        handleCancel={(file) => {}}
        name={"file"}
        types={["png","jpg"]}
      />
        
    </div>
    {output === "" && !waiting ? (
        <></>
      ) : (
        <>
          
          {waiting ? (
             <div
             className="d-flex flex-column justify-content-center align-items-center p-4"
             style={{ gap: "15px" }}
           >
             <CircularProgress />
             <span>{t("This may take some time, please be patient")}</span>
           </div>
          ) : (
            <div>
                <div style={{height:50}}></div>
                <div className='intro-title titlec'>
                    <span>{t("Solar Panel Analysing Results")}</span>
                </div>
                <div style={{height:50}}></div>

                <Container fluid="xl" className='container desc1 d-flex justify-content-within align-items-center crsv' >
                <div className='imgcont w-50' style={{zIndex:500}}>
                <div className="layer " style={{zIndex:500}}>
                    <img className='img1 rescov' src={images[showIndex]} alt="" /> 
                </div>
                </div>
                <div className='desco1 w-50' style={{zIndex:500,marginLeft:"-70px"}}>
                <div className='descotitle' style={{marginTop:"-50px"}}>
                    <div className="effect-wrap">
                        <div>
                            <h1 className="effect-block">
                        <span>{t("This Panel is")}</span>
                    </h1>
                    <h1 className="effect-block" id="another">
                        <span>{Infos[showIndex]["title"]}</span>
                    </h1>
                        </div>
                    </div>
                    </div>
                </div>
                </Container>
                
                <Container fluid="xl" className='container desc1 d-flex justify-content-within align-items-center' >
                <div className='imgcont w-50' >
                <div className="layer ">
                    <img className='img1' src={Resimages[showIndex][0]} alt="" /> 
                </div>
                </div>
                <div className='desco1 w-50'>
                    <div className='descotitle'>
                    {t("What did")} <span style={{color: "#178a9f"}}>{Infos[showIndex]["title"]} </span>{t("means")}  
                    </div>
                    <div className='descocontent'>
                        {Infos[showIndex]["what"]}
                 </div>
                </div>
                </Container>

                <Container fluid="xl" className='container desc1 d-flex justify-content-within align-items-center'>
                <div className='desco1 w-50' style={{paddingRight:"2rem",paddingLeft:"0"}}>
                    <div className='descotitle'>
                    {t("What causes the")}  <span style={{color: "#178a9f"}}>{Infos[showIndex]["title"]} </span>
                    </div>
                    <div className='descocontent'>
                    {Infos[showIndex]["cause"]}
                    </div>
                </div>
                <div className='imgcont w-50' >
                <div className="layer2"></div>
                    <img className='img2' src={Resimages[showIndex][1]} alt="" /> 
                </div>
                
            </Container>

            <Container fluid="xl" className='container desc1 d-flex justify-content-within align-items-center' >
                <div className='imgcont w-50' >
                <div className="layer ">
                    <img className='img1' src={Resimages[showIndex][2]} alt="" /> 
                </div>
                </div>
                <div className='desco1 w-50'>
                    <div className='descotitle'>
                    How should I  <span style={{color: "#179f42"}}>Clean</span>  this panel 
                    </div>
                    <div className='descocontent'>
                        {Infos[showIndex]["clean"]}
                 </div>
                </div>
                </Container>

                <Container fluid="xl" className='container desc1 d-flex justify-content-within align-items-center'>
                <div className='desco1 w-50' style={{paddingRight:"2rem",paddingLeft:"0"}}>
                    <div className='descotitle'>
                    {t("How to reduce this ")}   <span style={{color: "#ba3e37"}}>Prbolem</span> 
                    </div>
                    <div className='descocontent'>
                    {Infos[showIndex]["save"]}
                    </div>
                </div>
                <div className='imgcont w-50' >
                <div className="layer2"></div>
                    <img className='img2' src={Resimages[showIndex][3]} alt="" /> 
                </div>
                
            </Container>

                <div>
                    
                    <ChatComp1>

                    </ChatComp1>
                
            </div>
            </div>
           
          )}
        </>
      )}
    </>
    
  )
}

export default Monitor