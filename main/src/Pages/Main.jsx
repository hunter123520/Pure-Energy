import React , {useState,useEffect} from 'react'
import ChatComp from '../Components/ChatComp'
import "../Styles/Recycle.css"
import Uploader from '../Components/Uploader'
import APIService from '../Api/APIService'
import { CircularProgress } from "@mui/material";
import { useTranslation } from "react-i18next";
import ActionHolder from "../Components/ActionHolder"
import droneimg from "../Images/drone.png"
import panelimg from "../Images/panel.png"
import SolarField from '../Components/SolarField'
import test1 from "../Images/test1.jpeg"
import garbagedroneimg from "../Images/garbagedrone.png"
import cleandroneimg from "../Images/cleandrone.png"
import Slider from '@mui/material/Slider';


const Recycle = () => {
    // const [img,setImg] = useState([]);
    const [output, setoutput] = useState("");
    const [waiting, setWaiting] = useState(false);
    const [question,setquestion] = useState("what to do with plastic garbage")
    const [showIndex,setShowIndex] = useState(0)
    const [img,setimg] = useState(null);
    const { t, i18n } = useTranslation();
    const [drones,setdrones] = useState(1)
    const [Gdrones,setGdrones] = useState(1)
    const [Cdrones,setCdrones] = useState(1)
    const [panels,setpanels] = useState(56)
    const [Solar_Locations,setSolar_Locations] = useState([])
    const [detectedPanels,setDetectedPanels] = useState([])
    const [dronehistory,setDroneHistory] = useState([])
    const [droneID,setDroneID] = useState(-1)
    const [droneType,setDroneType] = useState(-1)
    const [selectedProblem, setSelectedProblem] = useState(-1)
    const [selectedPIndex,setSelectedPIndex ] = useState(-1)
    const [selectedDroneLocation,setSelectedDroneLocation] = useState()
    const [GeneralHistory,setGeneralHistory] = useState([])
    const [probC,setprobC] = useState(5)
    const [probG,setprobG] = useState(5)
    
    const UpdateHistory = (event)=>{
      // setGeneralHistory([event,...GeneralHistory])
      setGeneralHistory((GeneralHistory) => [event,...GeneralHistory]);
    }

    const guidelines =  t("There are several ways to find information about recycling in your area: Your local waste collection provider's website: They will usually have a detailed list of accepted recyclables and any specific instructions. Earth911 (https://earth911.com/) is a comprehensive search engine for recycling information by location. Your municipality's website: They might have a dedicated section for recycling guidelines and drop-off locations.");

    const handleSelectedDrone =(x,y)=>{
      setSelectedDroneLocation({x:x,y:y})
    }

    const handleclick =(index,history,x,y,show)=>{

      // setDroneHistory(history)
      // setDroneID(index)
      // setShowPanels(true)
      // setdrone_to_focus([index,x,y]);

      if(show == false){
        setDetectedPanels([])
        setDroneID(-1)
        setDroneType(-1)
      }else{
        
        setSelectedDroneLocation({x:x,y:y})
        const radarCenterX = x + 37.5; // Drone center (x)
        const radarCenterY = y + 37.5; // Drone center (y)

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

        setDetectedPanels(filtred_panels.map(obj => obj.index));
      }
    }

    // useEffect(() => {
    //   const intervalId = setInterval(() => {
    //     var index,x,y = drone_to_focus;
        
    //   }, 50);
    
    //   return () => clearInterval(intervalId);
    // }, [drone_to_focus]);

    const handleSubmit = (image) => {
        setWaiting(true);
        APIService.recycle({"files":image})
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

    const typeColors = {
      Panel_Detected: "red",
      Garbage_Detected: "orange",
      Garbage_Collected: "#34eb6e",
      Panel_Fixed:"#3480eb"
    };
  return (
    <>

    <div className='d-flex flex-row align-items-center justify-content-center p-4'
      style={{ gap: "10px" }}>
    <ActionHolder img={droneimg} content='Monitoring Drones' value={drones}
    handleChange={()=>{
        setdrones(drones+1);
    }} handleCancel={()=>{
        if(drones>1){
            setdrones(drones-1);
        }
    }}></ActionHolder>

<ActionHolder img={garbagedroneimg} content='Garbage Collecting Drones' value={Gdrones}
    handleChange={()=>{
        if( Gdrones<10){
        setGdrones(Gdrones+1);
        }
    }} handleCancel={()=>{
        if((Gdrones>1)){
            setGdrones(Gdrones-1);
        }
    }}></ActionHolder>

<ActionHolder img={cleandroneimg} content='Cleaning Drones' value={Cdrones}
    handleChange={()=>{
      if( Cdrones<10){
        setCdrones(Cdrones+1);
      }
    }} handleCancel={()=>{
        if((Cdrones>1)){
            setCdrones(Cdrones-1);
        }
    }}></ActionHolder>




    <ActionHolder img={panelimg} content='Solar Panels' value={panels}
    handleChange={()=>{
      if( panels<70){
        setpanels(panels+1);
      }
    }} handleCancel={()=>{
        if(panels>1){
            setpanels(panels-1);
        }
    }}></ActionHolder>
    </div>

    <div className='d-flex justify-content-center align-items-center w-100'>
    <div className='FieldLayout p-4 d-flex flex-column justify-content-center align-items-center' style={{}}>
    <div className='d-flex flex-row justify-content-between align-items-center w-75' style={{gap:50}}>
    
    <div className='d-flex flex-column  justify-content-between align-items-center w-100'>
      Probability of Panel Faults ({probC})
    <Slider value={probC} onChange={(e,probC)=>{
      setprobC(probC)
    }} aria-label="Default" valueLabelDisplay="auto" />
    </div>

    <div className='d-flex flex-column  justify-content-between align-items-center w-100'>
    Probability of Garbage Found ({probG})
    <Slider value={probG} onChange={(e,probG)=>{
      setprobG(probG)
    }} aria-label="Default" valueLabelDisplay="auto" />
    </div></div></div></div>

    <SolarField GeneralHistory={GeneralHistory} N={panels} M={drones} L={Gdrones} K={Cdrones} probC={probC} probG={probG} handleSelectedDrone={handleSelectedDrone} UpdateHistory={UpdateHistory} setDroneHistory={setDroneHistory} handleclick={handleclick} setSolar_Locations={setSolar_Locations} detectedPanels={detectedPanels} droneID={droneID} setDroneID={setDroneID} droneType={droneType} setDroneType={setDroneType}></SolarField>

    
    {droneID==-1?<div className='d-flex flex-row  justify-content-center align-items-center '>
    <div className='d-flex flex-column p-4 justify-content-center align-items-center w-75' style={{gap:"10px"}}>

    
      <h3 style={{ textAlign: "center", marginBottom: "15px" }}>Solar Field Log</h3>
      <div className={"UploaderV1 p-4 d-flex flex-row justify-content-center align-items-center " }>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <img src={droneimg} alt="" style={{width:"250px",height:"250px"}}/>
        </div>

        <div className='w-100' style={{ padding: '10px',  margin: '0 auto' }}>
       
      <h3 style={{ textAlign: "center", marginBottom: "15px" }}>Event History ({GeneralHistory.length} Events)</h3>
      <div style={{
        maxHeight: '300px', // Adjust this height as needed
        overflowY: 'auto',
        paddingRight: '10px' // Optional: Adds padding to prevent scrollbar from overlapping content
      }}>
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        {GeneralHistory.map((event, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "8px",
              padding: "8px",
              borderRadius: "6px",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
              fontSize: "14px",
              backgroundColor: (selectedPIndex == index )?"#adcdd4":"#f9f9f9",
              cursor:"pointer"
            }}
            onClick={()=>{
              setSelectedProblem(event)
              setSelectedPIndex(index)
            }}
          >
            {/* Left color bar */}
            <div
              style={{
                width: "6px",
                height: "100%",
                backgroundColor: typeColors[event.type] || "#ccc",
                borderRadius: "3px",
                marginRight: "10px",
              }}
            ></div>
            
            {/* Event Details */}
            <div>
              {/* First line */}
              <div style={{ fontWeight: "bold", color: typeColors[event.type] || "#333" }}>
                {event.title}
              </div>
              {/* Second line */}
              <div style={{ color: "#555" }}>
                {event.case} •
                <span style={{ fontWeight: "500" }}> Detected in Panel {event.panelId+1}</span> •
                <span style={{ fontWeight: "500" }}> At location X-axis :  {Solar_Locations.filter((panel)=>{
                  return panel.index == event.panelId
                })[0].x}</span> 
                <span style={{ fontWeight: "500" }}> and Y-axis : {Solar_Locations.filter((panel)=>{
                  return panel.index == event.panelId
                })[0].y}</span> •
                
                <span style={{ fontWeight: "500" }}> by Drone {event.droneId+1}</span> 
                
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
      </div>
    </div>
    </div>:
    <div className='d-flex flex-row  justify-content-center align-items-center '>
    <div className='d-flex flex-column p-4 justify-content-center align-items-center w-75' style={{gap:"10px"}}>

      
      <h3 style={{ textAlign: "center", marginBottom: "15px" }}>Drone {droneID+1}</h3>
      <div className={"UploaderV1 p-4 d-flex flex-row justify-content-center align-items-center " }>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <img src={droneimg} alt="" style={{width:"250px",height:"250px"}}/>

          <h4 style={{ textAlign: "center", marginBottom: "15px" }}>Drone Location</h4>
          <h5 style={{ textAlign: "center", marginBottom: "15px" }}>X-Axis : {selectedDroneLocation.x}</h5>
          <h5 style={{ textAlign: "center", marginBottom: "15px" }}>Y-Axis : {selectedDroneLocation.y}</h5>
        </div>

        <div className='w-100' style={{ padding: '10px',  margin: '0 auto' }}>
       
      <h3 style={{ textAlign: "center", marginBottom: "15px" }}>Event History ({dronehistory.length} Events)</h3>
      <div style={{
        maxHeight: '300px', // Adjust this height as needed
        overflowY: 'auto',
        paddingRight: '10px' // Optional: Adds padding to prevent scrollbar from overlapping content
      }}>
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        {dronehistory.map((event, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "8px",
              padding: "8px",
              borderRadius: "6px",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
              fontSize: "14px",
              backgroundColor: (selectedPIndex == index )?"#adcdd4":"#f9f9f9",
              cursor:"pointer"
            }}
            onClick={()=>{
              setSelectedProblem(event)
              setSelectedPIndex(index)
            }}
          >
            {/* Left color bar */}
            <div
              style={{
                width: "6px",
                height: "100%",
                backgroundColor: typeColors[event.type] || "#ccc",
                borderRadius: "3px",
                marginRight: "10px",
              }}
            ></div>
            
            {/* Event Details */}
            <div>
              {/* First line */}
              <div style={{ fontWeight: "bold", color: typeColors[event.type] || "#333" }}>
                {event.title}
              </div>
              {/* Second line */}
              <div style={{ color: "#555" }}>
                {event.case} • 
                <span style={{ fontWeight: "500" }}> Detected in Panel {event.panelId+1}</span> •
                <span style={{ fontWeight: "500" }}> At location X-axis :  {Solar_Locations.filter((panel)=>{
                  return panel.index == event.panelId
                })[0].x}</span> 
                <span style={{ fontWeight: "500" }}> and Y-axis : {Solar_Locations.filter((panel)=>{
                  return panel.index == event.panelId
                })[0].y}</span>
                
                
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
      </div>
    </div>
    </div>
}

{((selectedProblem==-1) || (droneID==-1 && GeneralHistory.length==0))?<></>:

    <div className='d-flex flex-row  justify-content-center align-items-center '>
    <div className='d-flex flex-column p-4 justify-content-center align-items-center w-75' style={{gap:"10px"}}>

      
      <h3 style={{ textAlign: "center", marginBottom: "15px" }}>Problem Details</h3>
      <div className={"UploaderV1 p-4 d-flex flex-row justify-content-center align-items-center " }>
        <div className='d-flex justify-content-center align-items-center'>
          {/* <img src={test1} alt="" style={{width:"250px"}}/> */}
          <img src= {selectedProblem.img} alt="" style={{width:"250px"}}/>
         
        </div>

        <div className='w-100' style={{ padding: '10px',  margin: '0 auto' }}>
        <div style={{
      padding: '15px',
      borderRadius: '8px',
      boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f5f5f5',
      maxWidth: '500px',
      margin: '0 auto'
    }}>
      <h4 style={{ color: '#333', marginBottom: '10px' }}>{selectedProblem.title}</h4>
      <p><strong>Type:</strong> {selectedProblem.type}</p>
      <p><strong>Classification:</strong> {selectedProblem.case}</p>
      {/* <p><strong>Classification:</strong> {selectedProblem.classification}</p> */}
      <p><strong>Drone ID:</strong> {selectedProblem.droneId +1}</p>
      <p><strong>Panel ID:</strong> {selectedProblem.panelId +1}</p>
      <p><strong>Panel X_Axis: </strong>{Solar_Locations.filter((panel)=>{
                  return panel.index == selectedProblem.panelId
                })[0].x} </p>
      <p><strong>Panel Y_Axis: </strong> {Solar_Locations.filter((panel)=>{
                  return panel.index == selectedProblem.panelId
                })[0].y}</p>


    </div>
    </div>
      </div>
    </div>
    </div>
}

    
    {/* <div className='d-flex justify-content-around errorContainer ' >
        
        <Uploader
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
                
                <div>
                    
                    <ChatComp>

                    </ChatComp>
                
            </div>
            </div>
           
          )}
        </>
      )} */}
    </>
    
  )
}

export default Recycle