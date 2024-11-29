import React, { useState, useEffect , useCallback, forwardRef, useImperativeHandle} from 'react';
import droneT from "../Images/garbageD.png"
// Example Garbage Drone Component
const GarbageDrone= forwardRef(({index,droneID,GeneralHistory,setAvailableGDrones,TreatingGLocations,
  droneType,setDroneType, addTreatingLocation, removeTreatingLocation,handleSelectedDrone,
  UpdateHistory,setDroneHistory,setDroneID, initialX, initialY,garbageLocation,remove_garbage, 
  disposalLocation }, ref) => {
    const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [isMoving, setIsMoving] = useState(false);
  const [showVision, setShowVision] = useState(false);
  const [history,setHistory] = useState([]);
  // const { TreatingGLocations, addTreatingLocation, removeTreatingLocation } = useTreatingContext();

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
  const moveToCollectAndDispose = async (garbageLocation, disposalLocation) => {
    if (isMoving) return;
    setIsMoving(true);
    var x = garbageLocation.x 
    var y = garbageLocation.y + 100
    console.log("1")
    // Move to garbage location
    await moveSmoothly(position, {x:x,y:y}, 2500);
    console.log("2")
    remove_garbage(garbageLocation)
    removeTreatingLocation(garbageLocation)
    // if(type==1){
        
    //   }

    // Move to disposal location
    await moveSmoothly({x:x,y:y}, disposalLocation, 1000);

    
    console.log({x:x,y:y},disposalLocation)
    // Move back to safe zone (initial position)
    await moveSmoothly(disposalLocation, { x: initialX, y: initialY }, 1000);
    console.log("4")
    

    setIsMoving(false);
    setRun(false)
    setAvailableGDrones((prevTreating) => [...prevTreating, index]);

    

    var temphist = history;
            temphist = [{
                      title:"Garbage Collected",
                      type:"Garbage_Collected",
                      case: "Plastic",
                      panelId: 0,
                      droneId: index,
                      droneType:1,
                    },...temphist]
            UpdateHistory({
                      title:"Garbage Collected",
                      type:"Garbage_Collected",
                      case: "Plastic",
                      droneId: index,
                      droneType:1,
                      panelId: 0,
                    })

                    setHistory(temphist)
                    if((droneID == index) && (droneType==1)){
                      if(showVision){
                    setDroneHistory(temphist)
                      }}
  };
  
  const func = () => {
    if(!run){
        
      var fltred = garbageLocation.filter((element)=>{
          return !TreatingGLocations.includes(element);
      })

      if(fltred.length != 0){
          // setTreatingGLocations([...TreatingGLocations,garbageLocation[0]])
          // setTreatingGLocations((prevTreating) => [...prevTreating, fltred[0]]);
          addTreatingLocation(fltred[0])
          console.log(TreatingGLocations)
          setRun(true)
          var temp = fltred[0]
          
          moveToCollectAndDispose(temp, disposalLocation)

          
      }
  }
  };

  // Expose `func` to the parent through the ref
  useImperativeHandle(ref, () => ({
    func
  }));
  const [run,setRun] = useState(false)
  useEffect(()=>{
    
  },[TreatingGLocations,garbageLocation, addTreatingLocation, removeTreatingLocation,run])

  useEffect(()=>{
    // console.log(position)
    if((droneID == index) && (droneType==1)){
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
              setDroneType(1)
              setDroneHistory(history)
            }
            
            setShowVision((prev) => !prev);
          }}
      />
    </div>
  );
});

export default GarbageDrone;