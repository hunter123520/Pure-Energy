import React, { useState, useEffect } from 'react'
import "../Styles/SolarField.css"
import droneT from "../Images/drone1.png"
import APIService from '../Api/APIService'
import battery1 from "../Images/GC/battery/battery (1).jpg"
import battery2 from "../Images/GC/battery/battery (2).jpg"
import battery3 from "../Images/GC/battery/battery (3).jpg"
import battery4 from "../Images/GC/battery/battery (4).jpg"
import battery5 from "../Images/GC/battery/battery (5).jpg"
import battery6 from "../Images/GC/battery/battery (6).jpg"
import battery7 from "../Images/GC/battery/battery (7).jpg"
import battery8 from "../Images/GC/battery/battery (8).jpg"
import battery9 from "../Images/GC/battery/battery (9).jpg"
import battery10 from "../Images/GC/battery/battery (10).jpg"

import biological1 from "../Images/GC/biological/biological (1).jpg"
import biological2 from "../Images/GC/biological/biological (2).jpg"
import biological3 from "../Images/GC/biological/biological (3).jpg"
import biological4 from "../Images/GC/biological/biological (4).jpg"
import biological5 from "../Images/GC/biological/biological (5).jpg"
import biological6 from "../Images/GC/biological/biological (6).jpg"
import biological7 from "../Images/GC/biological/biological (7).jpg"
import biological8 from "../Images/GC/biological/biological (8).jpg"
import biological9 from "../Images/GC/biological/biological (9).jpg"
import biological10 from "../Images/GC/biological/biological (10).jpg"

import brownglass1 from "../Images/GC/brown-glass/brown-glass (1).jpg"
import brownglass2 from "../Images/GC/brown-glass/brown-glass (2).jpg"
import brownglass3 from "../Images/GC/brown-glass/brown-glass (3).jpg"
import brownglass4 from "../Images/GC/brown-glass/brown-glass (4).jpg"
import brownglass5 from "../Images/GC/brown-glass/brown-glass (5).jpg"
import brownglass6 from "../Images/GC/brown-glass/brown-glass (6).jpg"
import brownglass7 from "../Images/GC/brown-glass/brown-glass (7).jpg"
import brownglass8 from "../Images/GC/brown-glass/brown-glass (8).jpg"
import brownglass9 from "../Images/GC/brown-glass/brown-glass (9).jpg"
import brownglass10 from "../Images/GC/brown-glass/brown-glass (10).jpg"

import cardboard1 from "../Images/GC/cardboard/cardboard (1).jpg"
import cardboard2 from "../Images/GC/cardboard/cardboard (2).jpg"
import cardboard3 from "../Images/GC/cardboard/cardboard (3).jpg"
import cardboard4 from "../Images/GC/cardboard/cardboard (4).jpg"
import cardboard5 from "../Images/GC/cardboard/cardboard (5).jpg"
import cardboard6 from "../Images/GC/cardboard/cardboard (6).jpg"
import cardboard7 from "../Images/GC/cardboard/cardboard (7).jpg"
import cardboard8 from "../Images/GC/cardboard/cardboard (8).jpg"
import cardboard9 from "../Images/GC/cardboard/cardboard (9).jpg"
import cardboard10 from "../Images/GC/cardboard/cardboard (10).jpg"

import clothes1 from "../Images/GC/clothes/clothes (1).jpg"
import clothes2 from "../Images/GC/clothes/clothes (2).jpg"
import clothes3 from "../Images/GC/clothes/clothes (3).jpg"
import clothes4 from "../Images/GC/clothes/clothes (4).jpg"
import clothes5 from "../Images/GC/clothes/clothes (5).jpg"
import clothes6 from "../Images/GC/clothes/clothes (6).jpg"
import clothes7 from "../Images/GC/clothes/clothes (7).jpg"
import clothes8 from "../Images/GC/clothes/clothes (8).jpg"
import clothes9 from "../Images/GC/clothes/clothes (9).jpg"
import clothes10 from "../Images/GC/clothes/clothes (10).jpg"

import greenglass1 from "../Images/GC/green-glass/green-glass (1).jpg"
import greenglass2 from "../Images/GC/green-glass/green-glass (2).jpg"
import greenglass3 from "../Images/GC/green-glass/green-glass (3).jpg"
import greenglass4 from "../Images/GC/green-glass/green-glass (4).jpg"
import greenglass5 from "../Images/GC/green-glass/green-glass (5).jpg"
import greenglass6 from "../Images/GC/green-glass/green-glass (6).jpg"
import greenglass7 from "../Images/GC/green-glass/green-glass (7).jpg"
import greenglass8 from "../Images/GC/green-glass/green-glass (8).jpg"
import greenglass9 from "../Images/GC/green-glass/green-glass (9).jpg"
import greenglass10 from "../Images/GC/green-glass/green-glass (10).jpg"

import metal1 from "../Images/GC/metal/metal (1).jpg"
import metal2 from "../Images/GC/metal/metal (2).jpg"
import metal3 from "../Images/GC/metal/metal (3).jpg"
import metal4 from "../Images/GC/metal/metal (4).jpg"
import metal5 from "../Images/GC/metal/metal (5).jpg"
import metal6 from "../Images/GC/metal/metal (6).jpg"
import metal7 from "../Images/GC/metal/metal (7).jpg"
import metal8 from "../Images/GC/metal/metal (8).jpg"
import metal9 from "../Images/GC/metal/metal (9).jpg"
import metal10 from "../Images/GC/metal/metal (10).jpg"

import paper1 from "../Images/GC/paper/paper (1).jpg"
import paper2 from "../Images/GC/paper/paper (2).jpg"
import paper3 from "../Images/GC/paper/paper (3).jpg"
import paper4 from "../Images/GC/paper/paper (4).jpg"
import paper5 from "../Images/GC/paper/paper (5).jpg"
import paper6 from "../Images/GC/paper/paper (6).jpg"
import paper7 from "../Images/GC/paper/paper (7).jpg"
import paper8 from "../Images/GC/paper/paper (8).jpg"
import paper9 from "../Images/GC/paper/paper (9).jpg"
import paper10 from "../Images/GC/paper/paper (10).jpg"


import plastic1 from "../Images/GC/plastic/plastic (1).jpg"
import plastic2 from "../Images/GC/plastic/plastic (2).jpg"
import plastic3 from "../Images/GC/plastic/plastic (3).jpg"
import plastic4 from "../Images/GC/plastic/plastic (4).jpg"
import plastic5 from "../Images/GC/plastic/plastic (5).jpg"
import plastic6 from "../Images/GC/plastic/plastic (6).jpg"
import plastic7 from "../Images/GC/plastic/plastic (7).jpg"
import plastic8 from "../Images/GC/plastic/plastic (8).jpg"
import plastic9 from "../Images/GC/plastic/plastic (9).jpg"
import plastic10 from "../Images/GC/plastic/plastic (10).jpg"

import shoes1 from "../Images/GC/shoes/shoes (1).jpg"
import shoes2 from "../Images/GC/shoes/shoes (2).jpg"
import shoes3 from "../Images/GC/shoes/shoes (3).jpg"
import shoes4 from "../Images/GC/shoes/shoes (4).jpg"
import shoes5 from "../Images/GC/shoes/shoes (5).jpg"
import shoes6 from "../Images/GC/shoes/shoes (6).jpg"
import shoes7 from "../Images/GC/shoes/shoes (7).jpg"
import shoes8 from "../Images/GC/shoes/shoes (8).jpg"
import shoes9 from "../Images/GC/shoes/shoes (9).jpg"
import shoes10 from "../Images/GC/shoes/shoes (10).jpg"

import trash1 from "../Images/GC/trash/trash (1).jpg"
import trash2 from "../Images/GC/trash/trash (2).jpg"
import trash3 from "../Images/GC/trash/trash (3).jpg"
import trash4 from "../Images/GC/trash/trash (4).jpg"
import trash5 from "../Images/GC/trash/trash (5).jpg"
import trash6 from "../Images/GC/trash/trash (6).jpg"
import trash7 from "../Images/GC/trash/trash (7).jpg"
import trash8 from "../Images/GC/trash/trash (8).jpg"
import trash9 from "../Images/GC/trash/trash (9).jpg"
import trash10 from "../Images/GC/trash/trash (10).jpg"

import whiteglass1 from "../Images/GC/white-glass/white-glass (1).jpg"
import whiteglass2 from "../Images/GC/white-glass/white-glass (2).jpg"
import whiteglass3 from "../Images/GC/white-glass/white-glass (3).jpg"
import whiteglass4 from "../Images/GC/white-glass/white-glass (4).jpg"
import whiteglass5 from "../Images/GC/white-glass/white-glass (5).jpg"
import whiteglass6 from "../Images/GC/white-glass/white-glass (6).jpg"
import whiteglass7 from "../Images/GC/white-glass/white-glass (7).jpg"
import whiteglass8 from "../Images/GC/white-glass/white-glass (8).jpg"
import whiteglass9 from "../Images/GC/white-glass/white-glass (9).jpg"
import whiteglass10 from "../Images/GC/white-glass/white-glass (10).jpg"

import Bird1 from "../Images/GC1/Bird/Bird (1).jpg"
import Bird2 from "../Images/GC1/Bird/Bird (2).jpg"
import Bird3 from "../Images/GC1/Bird/Bird (3).jpg"
import Bird4 from "../Images/GC1/Bird/Bird (4).jpg"
import Bird5 from "../Images/GC1/Bird/Bird (5).jpg"
import Bird6 from "../Images/GC1/Bird/Bird (6).jpg"
import Bird7 from "../Images/GC1/Bird/Bird (7).jpg"
import Bird8 from "../Images/GC1/Bird/Bird (8).jpg"
import Bird9 from "../Images/GC1/Bird/Bird (9).jpg"
import Bird10 from "../Images/GC1/Bird/Bird (10).jpg"

import Dusty1 from "../Images/GC1/Dusty/Dust (1).jpg"
import Dusty2 from "../Images/GC1/Dusty/Dust (2).jpg"
import Dusty3 from "../Images/GC1/Dusty/Dust (3).jpg"
import Dusty4 from "../Images/GC1/Dusty/Dust (4).jpg"
import Dusty5 from "../Images/GC1/Dusty/Dust (5).jpg"
import Dusty6 from "../Images/GC1/Dusty/Dust (6).jpg"
import Dusty7 from "../Images/GC1/Dusty/Dust (7).jpg"
import Dusty8 from "../Images/GC1/Dusty/Dust (8).jpg"
import Dusty9 from "../Images/GC1/Dusty/Dust (9).jpg"
import Dusty10 from "../Images/GC1/Dusty/Dust (10).jpg"

import Clean1 from "../Images/GC1/Clean/Clean (1).jpg"
import Clean2 from "../Images/GC1/Clean/Clean (2).jpg"
import Clean3 from "../Images/GC1/Clean/Clean (3).jpg"
import Clean4 from "../Images/GC1/Clean/Clean (4).jpg"
import Clean5 from "../Images/GC1/Clean/Clean (5).jpg"
import Clean6 from "../Images/GC1/Clean/Clean (6).jpg"
import Clean7 from "../Images/GC1/Clean/Clean (7).jpg"
import Clean8 from "../Images/GC1/Clean/Clean (8).jpg"
import Clean9 from "../Images/GC1/Clean/Clean (9).jpg"
import Clean10 from "../Images/GC1/Clean/Clean (10).jpg"

import Electrical1 from "../Images/GC1/Electrical/Electrical (1).jpg"
import Electrical2 from "../Images/GC1/Electrical/Electrical (2).jpg"
import Electrical3 from "../Images/GC1/Electrical/Electrical (3).jpg"
import Electrical4 from "../Images/GC1/Electrical/Electrical (4).jpg"
import Electrical5 from "../Images/GC1/Electrical/Electrical (5).jpg"
import Electrical6 from "../Images/GC1/Electrical/Electrical (6).jpg"
import Electrical7 from "../Images/GC1/Electrical/Electrical (7).jpg"
import Electrical8 from "../Images/GC1/Electrical/Electrical (8).jpg"
import Electrical9 from "../Images/GC1/Electrical/Electrical (9).jpg"
import Electrical10 from "../Images/GC1/Electrical/Electrical (10).jpg"

import Physical1 from "../Images/GC1/Physical/Physical (1).jpg"
import Physical2 from "../Images/GC1/Physical/Physical (2).jpg"
import Physical3 from "../Images/GC1/Physical/Physical (3).jpg"
import Physical4 from "../Images/GC1/Physical/Physical (4).jpg"
import Physical5 from "../Images/GC1/Physical/Physical (5).jpg"
import Physical6 from "../Images/GC1/Physical/Physical (6).jpg"
import Physical7 from "../Images/GC1/Physical/Physical (7).jpg"
import Physical8 from "../Images/GC1/Physical/Physical (8).jpg"
import Physical9 from "../Images/GC1/Physical/Physical (9).jpg"
import Physical10 from "../Images/GC1/Physical/Physical (10).jpg"

import Snow1 from "../Images/GC1/Snow/Snow (1).jpg"
import Snow2 from "../Images/GC1/Snow/Snow (2).jpg"
import Snow3 from "../Images/GC1/Snow/Snow (3).jpg"
import Snow4 from "../Images/GC1/Snow/Snow (4).jpg"
import Snow5 from "../Images/GC1/Snow/Snow (5).jpg"
import Snow6 from "../Images/GC1/Snow/Snow (6).jpg"
import Snow7 from "../Images/GC1/Snow/Snow (7).jpg"
import Snow8 from "../Images/GC1/Snow/Snow (8).jpg"
import Snow9 from "../Images/GC1/Snow/Snow (9).jpg"
import Snow10 from "../Images/GC1/Snow/Snow (10).jpg"

const GImages = [
  {img:battery1},{img:battery2},{img:battery3},{img:battery4},{img:battery5},{img:battery6},
  {img:battery7},{img:battery8},{img:battery9},{img:battery10},
  {img:biological1},{img:biological2},{img:biological3},{img:biological4},{img:biological5},{img:biological6},
  {img:biological7},{img:biological8},{img:biological9},{img:biological10},
  {img:brownglass1},{img:brownglass2},{img:brownglass3},{img:brownglass4},{img:brownglass5},{img:brownglass6},
  {img:brownglass7},{img:brownglass8},{img:brownglass9},{img:brownglass10},
  {img:cardboard1},{img:cardboard2},{img:cardboard3},{img:cardboard4},{img:cardboard5},{img:cardboard6},
  {img:cardboard7},{img:cardboard8},{img:cardboard9},{img:cardboard10},
  {img:clothes1},{img:clothes2},{img:clothes3},{img:clothes4},{img:clothes5},{img:clothes6},
  {img:clothes7},{img:clothes8},{img:clothes9},{img:clothes10},
  {img:greenglass1},{img:greenglass2},{img:greenglass3},{img:greenglass4},{img:greenglass5},{img:greenglass6},
  {img:greenglass7},{img:greenglass8},{img:greenglass9},{img:greenglass10},
  {img:metal1},{img:metal2},{img:metal3},{img:metal4},{img:metal5},{img:metal6},
  {img:metal7},{img:metal8},{img:metal9},{img:metal10},
  {img:paper1},{img:paper2},{img:paper3},{img:paper4},{img:paper5},{img:paper6},
  {img:paper7},{img:paper8},{img:paper9},{img:paper10},
  {img:plastic1},{img:plastic2},{img:plastic3},{img:plastic4},{img:plastic5},{img:plastic6},
  {img:plastic7},{img:plastic8},{img:plastic9},{img:plastic10},
  {img:shoes1},{img:shoes2},{img:shoes3},{img:shoes4},{img:shoes5},{img:shoes6},
  {img:shoes7},{img:shoes8},{img:shoes9},{img:shoes10},
  {img:trash1},{img:trash2},{img:trash3},{img:trash4},{img:trash5},{img:trash6},
  {img:trash7},{img:trash8},{img:trash9},{img:trash10},
  {img:whiteglass1},{img:whiteglass2},{img:whiteglass3},{img:whiteglass4},{img:whiteglass5},{img:whiteglass6},
  {img:whiteglass7},{img:whiteglass8},{img:whiteglass9},{img:whiteglass10},
]



const CImages = [
  {img:Bird1},{img:Bird2},{img:Bird3},{img:Bird4},{img:Bird5},{img:Bird6},
  {img:Bird7},{img:Bird8},{img:Bird9},{img:Bird10},
    {img:Dusty1},{img:Dusty2},{img:Dusty3},{img:Dusty4},{img:Dusty5},{img:Dusty6},
    {img:Dusty7},{img:Dusty8},{img:Dusty9},{img:Dusty10},
    {img:Clean1},{img:Clean2},{img:Clean3},{img:Clean4},{img:Clean5},{img:Clean6},
    {img:Clean7},{img:Clean8},{img:Clean9},{img:Clean10},
    {img:Snow1},{img:Snow2},{img:Snow3},{img:Snow4},{img:Snow5},{img:Snow6},
    {img:Snow7},{img:Snow8},{img:Snow9},{img:Snow10},
    {img:Physical1},{img:Physical2},{img:Physical3},{img:Physical4},{img:Physical5},{img:Physical6},
    {img:Physical7},{img:Physical8},{img:Physical9},{img:Physical10},
    {img:Electrical1},{img:Electrical2},{img:Electrical3},{img:Electrical4},{img:Electrical5},{img:Electrical6},
    {img:Electrical7},{img:Electrical8},{img:Electrical9},{img:Electrical10},
  ]


const Drone = ({index,probG,probC,droneID,UpdateHistory,
  droneType,setDroneType,setDroneHistory,setDroneID,handleclick,Solar_Locations,alert_panel,alert_garbage}) => {
  const fieldWidth = 1000; // Field width
  const fieldHeight = 350; // Field height
  const [showVision, setShowVision] = useState(false);
  const [view,setView] = useState([]);
  const [viewFULL,setViewFULL] = useState([]);
  const [history,setHistory] = useState([]);

  // Initialize drone position and direction
  const [position, setPosition] = useState({ 
     x: Math.floor(Math.random() * (fieldWidth - 0 + 1) + 0)
    , y: Math.floor(Math.random() * (fieldHeight - 0 + 1) + 0) });
  const [direction, setDirection] = useState({ x: 1, y: 1 });

  // Speed of movement
  const speed = 3;

  // Function to generate a new random direction
  const getRandomDirection = () => ({
    x: Math.random() > 0.5 ? 1 : -1,
    y: Math.random() > 0.5 ? 1 : -1,
  });

  const handleSubmitG = (image) => {
    // console.log(typeof(image))
    // console.log(image.src)
    image = image.split(',')[1];
    return APIService.recycle({"files":image})
      .then((response) => {
        // setoutput(response["output"]);
        
        var prediction = Number(response["output"]);
        if(prediction == NaN){
          prediction = 0
        }
        var classesG = ["battery","biological","brown-glass",
          "cardboard","clothes","green-glass",
          "metal","paper","plastic","shoes","trash",
          "white-glass"]
        setclassG(classesG[prediction])
        return classesG[prediction]
      })
      .catch((error) => console.log("error", error));
//     setoutput("qsdqs");
//    setWaiting(false);
  };

  const handleSubmitC = (image) => {
    image = image.split(',')[1];
    return APIService.monitor({"files":image})
      .then((response) => {
        // setoutput(response["output"]);
        var prediction = Number(response["output"]);
        if((prediction == NaN)||(prediction == -1)){
          prediction = 0
        }
        var classesC = ["Bird-drop","Clean","Dusty","Electrical-damage","Physical-Damage","Snow-Covered"]
        setclassC(classesC[prediction])
        return classesC[prediction]
      })
      .catch((error) => console.log("error", error));
//     setoutput("qsdqs");
//    setWaiting(false);
  };

  const [classG,setclassG] = useState(-1)
  const [classC,setclassC] = useState(-1)

  const GFUNC = async (temphist)=>{
    const radarCenterX = position.x + 37.5; // Drone center (x)
      const radarCenterY = position.y + 37.5; // Drone center (y)

      var x = Math.floor(Math.random() * ((radarCenterX +50) - (radarCenterX-50) + 1) + (radarCenterX-50) )
      var y = Math.floor(Math.random() * ((radarCenterY +50) - (radarCenterY-50) + 1) + (radarCenterY-50) )
      
      const randomIndex = Math.floor(Math.random() * GImages.length);
      var selectedImgG = GImages[randomIndex]["img"];

      
        // var classG;
      var TX = await handleSubmitG(selectedImgG)

      temphist = [{
        title:"Garbage Detected",
        type:"Garbage_Detected",
        case: TX,
        panelId: 0,
        droneId: index,
        droneType:0,
        img:selectedImgG,
        x:x,
        y:y
      },...temphist]
      
      UpdateHistory({
        title:"Garbage Detected",
        type:"Garbage_Detected",
        case: TX,
        droneId: index,
        droneType:0,
        panelId: 0,
        img:selectedImgG,
        x:x,
        y:y
      })
      return {temphist,x,y}
  }

  const CFUNC = async (temphist)=>{
    const randomIndex = Math.floor(Math.random() * view.length);
    var randomNumber = view[randomIndex];
    var panel = viewFULL[randomIndex];

    const randomIndex1 = Math.floor(Math.random() * CImages.length);
     var selectedImgC = CImages[randomIndex1]["img"];


     
    var TX =  await handleSubmitC(selectedImgC)
   
   temphist = [{
     title:"Panel Problem Detected",
     type:"Panel_Detected",
     case: TX,
     panelId: randomNumber,
     droneId: index,
     droneType:0,
     img:selectedImgC,
     x:panel.x,
     y:panel.y
   },...temphist]
   
   UpdateHistory({
     title:"Panel Problem Detected",
     type:"Panel_Detected",
     case: TX,
     panelId: randomNumber,
     droneType:0,
     droneId: index,
     img:selectedImgC,
     x:panel.x,
     y:panel.y
   })
   return {temphist,randomNumber};
  }

  const Update = async ()=>{
    
    var temphist = history;
    var case1 = false;
    var case2 = false;
    var x,y;

    var selectedImgG;
    var selectedImgC;
    
    if ((Math.abs(Math.random()) < ( (probG/20)/100))){
      case1 = true
      var holder= await GFUNC(temphist)
      temphist = holder.temphist
      x = holder.x
      y = holder.y
      }
    var randomNumber;
    if ((Math.abs(Math.random()) <( (probC/20)/100)) && (view.length != 0)){
      case2 = true 
      var holder=  await CFUNC(temphist)
      temphist = holder.temphist
      randomNumber  = holder.randomNumber
    } 


    if(case1 || case2){
      setHistory(temphist)
      if((droneID == index) && (droneType == 0)){
        if(showVision){
          handleclick(index,history,position.x,position.y,true);
          setDroneHistory(temphist)
        }
      }
      if(case1){
        alert_garbage(x,y);
      }else{
        alert_panel(randomNumber)
      }
    }
    if((droneID,droneType != index)||(droneType!=0)){
      setShowVision(false)
    }else{
    if(showVision){
      handleclick(index,history,position.x,position.y,true);
      setDroneHistory(temphist)
    }}
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosition((position) => {
        const newX = position.x + direction.x * speed;
        const newY = position.y + direction.y * speed;
  
        let updatedDirection = { ...direction };
  
        if (newX <= 0 || newX >= fieldWidth) updatedDirection.x *= -1;
        if (newY <= 0 || newY >= fieldHeight) updatedDirection.y *= -1;
        if (Math.random() < 0.025) updatedDirection = getRandomDirection();
  
        setDirection(updatedDirection);
        

        const radarCenterX = position.x + 37.5; // Drone center (x)
        const radarCenterY = position.y + 37.5; // Drone center (y)

        var panelWidth = 70;
        var panelHeight = 50;

        var radarRadius = 100

        var filtred_panels =  Solar_Locations.filter((panel) => {
          // Calculate closest point on panel to radar center
          const closestX = Math.max(panel.x, Math.min(radarCenterX, panel.x + panelWidth));
          const closestY = Math.max(panel.y, Math.min(radarCenterY, panel.y + panelHeight));

          // Calculate distance from radar center to closest point on the panel
          const distanceX = radarCenterX - closestX;
          const distanceY = radarCenterY - closestY;
          const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

          return distance <= radarRadius;
        });

        setView(filtred_panels.map(obj => obj.index));
        setViewFULL(filtred_panels)
        
        Update()

        return {
          x: Math.max(0, Math.min(newX, fieldWidth)),
          y: Math.max(0, Math.min(newY, fieldHeight)),
        };
      });
    }, 50);
  
    return () => {clearInterval(intervalId);}
  }, [direction, fieldWidth, fieldHeight, speed,showVision,droneID,droneType]);

  return (
    <div className='position-relative'>
    <img className='position-absolute drone' src={droneT} alt="" style={{
      transform: `translate(${position.x}px, ${position.y}px)`,
      // top:position.y+"px",left:position.x+"px",
      width:"75px",height:"75px"}}
      onClick={()=>{
        if(showVision){
          handleclick(index,history,position.x,position.y,false);
        }else{
          handleclick(index,history,position.x,position.y,true);
          setDroneID(index)
          setDroneType(0)
          setDroneHistory(history)
        }
        
        setShowVision((prev) => !prev);
      }}
      />
        {showVision && (
        <div
          style={{
            position: 'absolute',
            top: `${position.y + 37.5 - 100}px`, // Centering the vision spot around the drone
            left: `${position.x + 37.5 - 100}px`,
            width: '200px',
            height: '200px',
            backgroundColor: 'rgba(0, 0, 255, 0.2)', // Semi-transparent blue for vision spot
            borderRadius: '50%',
            pointerEvents: 'none', // Prevents blocking clicks
          }}
        />
      )}
        </div>
  )
}

export default Drone