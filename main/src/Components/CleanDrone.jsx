import React, { useState, useEffect, useCallback, forwardRef, useImperativeHandle } from 'react';
import droneT from "../Images/cleaningD.png"
// Example Garbage Drone Component
const CleanDrone = forwardRef(({index,droneID,handleSelectedDrone,UpdateHistory,GeneralHistory,
    setAvailableCDrones,
    droneType,setDroneType,
    TreatingCLocations,setDroneHistory,setDroneID,setTreatingCLocations, 
    initialX, initialY,panelsLocations,clean_panel }, ref) => {
    const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [isMoving, setIsMoving] = useState(false);
  const [showVision, setShowVision] = useState(false);
  const [history,setHistory] = useState([]);

  // Helper function to interpolate between two points for smooth movement
  const moveSmoothly = (start, end, duration) => {
    return new Promise((resolve) => {
      const distanceX = end.x - start.x;
      const distanceY = end.y - start.y;
      const steps = duration / 10; // number of steps for smoother animation
      let step = 0;
      const interval = setInterval(() => {
        setPosition((currentPos) => ({
          x: currentPos.x + distanceX / steps,
          y: currentPos.y + distanceY / steps,
        }));
        step += 1;

        if (step >= steps) {
          clearInterval(interval);
          setPosition(end); // Ensure exact position on last step
          resolve();
          
        }
      }, 10); // Update position every 10 ms for smooth animation
    });
  };

  // Function to handle the full movement sequence
  const moveToCollectAndDispose = async (Panel_Location) => {
    if (isMoving) return;
    setIsMoving(true);

    var x = Panel_Location.x 
    var y = Panel_Location.y + 300

    // Move to garbage location
    await moveSmoothly(position, {x:x,y:y}, 2500);

    clean_panel(Panel_Location)

    // Move back to safe zone (initial position)
    await moveSmoothly({x:x,y:y}, { x: initialX, y: initialY }, 1000);

    setIsMoving(false);
    setRun(false)
    setAvailableCDrones((prevTreating) => [...prevTreating, index]);
    var temphist = history;
            temphist = [{
                      title:"Panel Cleaned",
                      type:"Panel_Fixed",
                      case: "Plastic",
                      panelId: 0,
                      droneId: index,
                      droneType:2,
                    },...temphist]
            UpdateHistory({
                      title:"Panel Cleaned",
                      type:"Panel_Fixed",
                      case: "Plastic",
                      droneId: index,
                      panelId: 0,
                      droneType:2,
                    })
                    if((droneID == index) && (droneType==2)){
                      if(showVision){
                    setHistory(temphist)
                    setDroneHistory(temphist)
                      }}
  };
  

  const func = () => {
    if(!run){
        
        var fltred = panelsLocations.filter((element)=>{
            return !TreatingCLocations.includes(element);
        })
 
        if(fltred.length != 0){
            console.log(TreatingCLocations,fltred[0])
            // setTreatingCLocations([...TreatingCLocations,garbageLocation[0]])
            setTreatingCLocations((prevTreating) => [...prevTreating, fltred[0]]);
            setRun(true)
            var temp = fltred[0]
            
            moveToCollectAndDispose(temp)

            
        }
    }
  }
  useImperativeHandle(ref, () => ({
    func
  }));
  const [run,setRun] = useState(false)
  useEffect(()=>{
    
    
  },[panelsLocations,run])

  useEffect(()=>{
    // console.log(position)
    if((droneID == index) && (droneType==2)){
        if(showVision){
            handleSelectedDrone(Math.round(position.x),Math.round(position.y))
            // setDroneHistory(temphist)
    }}
  },[])

  return (
    <div className='position-relative' style={{zIndex:"999"}}>
       <img className='position-absolute drone' src={droneT} alt=""
        style={{
          position: 'absolute',
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '75px',
          height: '75px',
        }}

        onClick={()=>{
            if(showVision){
              setDroneID(-1)
              setDroneType(-1)
            }else{
                handleSelectedDrone(Math.round(position.x),Math.round(position.y))
              setDroneID(index)
              setDroneType(2)
              setDroneHistory(history)
            }
            
            setShowVision((prev) => !prev);
          }}
      />
    </div>
  );
});

export default CleanDrone;