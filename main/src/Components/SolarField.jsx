import React,{useState,useEffect,useCallback ,useRef } from 'react'
import "../Styles/SolarField.css"
import Garbage from './Garbage'
import CleanDrone from './CleanDrone'
import GarbageDrone from './GarbageDrone'
import Drone from './Drone'
import Panel from './Panel'
import gzoneimg from "../Images/gzone.png"
const SolarField = ({N,M,L,K,GeneralHistory,probC,probG,handleSelectedDrone,UpdateHistory,
    handleclick,setSolar_Locations,detectedPanels,droneID,setDroneID,setDroneHistory,
    droneType,setDroneType}) => {
    const [problem,setproblem] = useState([])
    const [GLocations,setGLocations] = useState([
        // {x:50,y:50},
        // {x:100,y:100},
        // {x:150,y:150},
        // {x:200,y:200},
    ])
    const [CLocations,setCLocations] = useState([
        // {x:50,y:50},
        // {x:100,y:100},
        // {x:150,y:150},
        // {x:200,y:200},
    ])
    const [TreatingGLocations,setTreatingGLocations] = useState([])
    const [TreatingCLocations,setTreatingCLocations] = useState([])

    const [AvailableGDrones,setAvailableGDrones] = useState(Array.from({ length: L }, (_, i) => i))
    const [AvailableCDrones,setAvailableCDrones] = useState(Array.from({ length: K }, (_, i) => i))

    const droneRefs = useRef([]);
    const droneCRefs = useRef([]);

    // Initialize refs array with the number of drones
    if (droneRefs.current.length !== L) {
        droneRefs.current = Array(L)
        .fill()
        .map((_, i) => droneRefs.current[i] || React.createRef());
    }
    if (droneCRefs.current.length !== K) {
        droneCRefs.current = Array(K)
        .fill()
        .map((_, i) => droneCRefs.current[i] || React.createRef());
    }

    // Function to safely add a location
  const addTreatingLocation = useCallback((location) => {
    setTreatingGLocations((prev) => {
      if (!prev.includes(location)) {
        return [...prev, location];
      }
      return prev;
    });
  }, []);

  // Function to safely remove a location
  const removeTreatingLocation = useCallback((location) => {
    setTreatingGLocations((prev) => prev.filter(item => item !== location));
  }, []);

    
    // const remove_garbage = (index)=>{
    //     setGLocations(GLocations.filter((_, i) => i !== index));
    // }
    const remove_garbage = (fltred)=>{
        // setTreatingGLocations(TreatingGLocations.filter((element, i) => element != fltred));
        // setGLocations(GLocations.filter((element, i) => element != fltred));
        setTreatingGLocations((prevLocations) => prevLocations.filter(item => item !== fltred));
        setGLocations((prevLocations) => prevLocations.filter(item => item !== fltred));
        
    }
    const clean_panel = (fltred)=>{
        // setTreatingGLocations(TreatingGLocations.filter((element, i) => element != fltred));
        // setGLocations(GLocations.filter((element, i) => element != fltred));
        var position = SolarPanels_Locations.filter((element)=>{
            return ((element.x == fltred.x)&&(element.y == fltred.y))
        })[0]
        setTreatingCLocations((prevLocations) => prevLocations.filter(item => item !== fltred));
        setCLocations((prevLocations) => prevLocations.filter(item => item !== fltred));

        setproblem((prevLocations) => prevLocations.filter(item => item !== position.index));
        
    }
    
    const alert_garbage = (x,y)=>{
        setGLocations([...GLocations,{x:x,y:y}])
    }
    const alert_panel = (index)=>{
        setproblem([...problem,index])
        var position = SolarPanels_Locations.filter((element)=>{
            return element.index == index
        })[0]
        setCLocations([...CLocations,{x:position.x,y:position.y}])
    }
    var loc_T = 10;
    var loc_L = 10;
    var loc_GL = 10;
    var loc_CL = 10;
    var End_L = 1100;
    
    const disposalLocation = { x: 1050, y: -10 };

    const SolarPanels = [];
    const SolarPanels_Locations = [];
    const DronesObjects = [];
    const GDronesObjects = [];
    const CDronesObjects = [];
    const Garbeges = [];
    for (let i = 0; i < N; i++) {
        if(loc_L + 75>End_L){
            loc_T = loc_T + 75;
            loc_L = 10;
        }
        if (detectedPanels.includes(i)) {
            var included = true;
          } else {
            var included = false;
          }
        if(problem.includes(i)){
            var fault = true;
        }else{
            var fault = false;
        }
        SolarPanels.push(
            <Panel key={"Panel"+i} top={loc_T} left={loc_L} included={included} fault = {fault}></Panel>
        );
        SolarPanels_Locations.push({index:i,x:loc_L,y:loc_T})
        
        loc_L = loc_L + 75;
    }
    // setSolar_Locations(SolarPanels_Locations);
    for (let i = 0; i < M; i++) {
        DronesObjects.push(
            <Drone key={"drone"+i} UpdateHistory={UpdateHistory} index={i} 
            setDroneHistory={setDroneHistory} droneID={droneID} 
            setDroneID={setDroneID} handleclick={handleclick} 
            probG={probG} probC={probC}
            Solar_Locations = {SolarPanels_Locations} alert_panel={alert_panel} 
            droneType={droneType} setDroneType={setDroneType}
            alert_garbage={alert_garbage}></Drone>
        );
    }

    for (let i = 0; i < L; i++) {
        // setAvailableGDrones(i)
        GDronesObjects.push(
            <GarbageDrone key={"Gdrone"+i} index={i} initialX={loc_GL} initialY={10} 
            TreatingGLocations={TreatingGLocations} 
            addTreatingLocation={addTreatingLocation} 
            removeTreatingLocation={removeTreatingLocation} 
            garbageLocation={GLocations}
            setAvailableGDrones={setAvailableGDrones}
            remove_garbage={remove_garbage}
            GeneralHistory={GeneralHistory}
            disposalLocation={disposalLocation}
            setDroneHistory={setDroneHistory} droneID={droneID} UpdateHistory={UpdateHistory}
            setDroneID={setDroneID} handleSelectedDrone={handleSelectedDrone}
            droneType={droneType} setDroneType={setDroneType}
            ref={droneRefs.current[i]}></GarbageDrone>
        );
        loc_GL += 80
    }

    for (let i = 0; i < K; i++) {
        CDronesObjects.push(
            <CleanDrone key={"Cdrone"+i} index={i} initialX={loc_CL} initialY={10} 
            TreatingCLocations={TreatingCLocations}
            setTreatingCLocations={setTreatingCLocations}
            panelsLocations={CLocations}
            setAvailableCDrones={setAvailableCDrones}
            clean_panel={clean_panel}
            GeneralHistory={GeneralHistory}
            setDroneHistory={setDroneHistory} droneID={droneID} UpdateHistory={UpdateHistory}
            setDroneID={setDroneID} handleSelectedDrone={handleSelectedDrone}
            droneType={droneType} setDroneType={setDroneType}
            ref={droneCRefs.current[i]}></CleanDrone>
        );
        loc_CL += 80
    }

    for (let i = 0; i < GLocations.length; i++) {
        Garbeges.push(
            <Garbage key={"GarbageAt"+GLocations[i].x+"/"+GLocations[i].y} x={GLocations[i].x} y={GLocations[i].y}></Garbage>
        );
    }


        
    useEffect(() => {
        setSolar_Locations(SolarPanels_Locations);
      }, []);

      useEffect(() => {
        setAvailableGDrones(Array.from({ length: L }, (_, i) => i))
      }, [L]);
      useEffect(() => {
        setAvailableCDrones(Array.from({ length: K }, (_, i) => i))
      }, [K]);
      

      useEffect(() => {
        var fltred = GLocations.filter((element)=>{
            return !TreatingGLocations.includes(element);
        })
  
        if(fltred.length != 0){
            if(AvailableGDrones.length != 0){
                setAvailableGDrones((prev) => prev.filter(item => item !== AvailableGDrones[0]));
                callDroneFunction(AvailableGDrones[0])
            }
        }
      }, [AvailableGDrones,GLocations]);

      useEffect(() => {
        var fltred = CLocations.filter((element)=>{
            return !TreatingCLocations.includes(element);
        })
  
        if(fltred.length != 0){
            if(AvailableCDrones.length != 0){
                setAvailableCDrones((prev) => prev.filter(item => item !== AvailableCDrones[0]));
                callDroneCFunction(AvailableCDrones[0])
            }
        }
      }, [AvailableCDrones,CLocations]);


      const callDroneFunction = (index) => {
        if (droneRefs.current[index] && droneRefs.current[index].current) {
          droneRefs.current[index].current.func();
        }
      };
      const callDroneCFunction = (index) => {
        if (droneCRefs.current[index] && droneCRefs.current[index].current) {
          droneCRefs.current[index].current.func();
        }
      };
  return (
    <div className='d-flex flex-column justify-content-center align-items-center w-100' style={{height:"fit-content !important"}}>
        
        <div className='d-flex flex-row justify-content-center align-items-center w-100' style={{height:"300px"}}>
            
            <div className='d-flex flex-column justify-content-center align-items-center w-75 h-100' style={{width:"75% !important"}}>
                <div className='FieldLayout p-4 d-flex flex-column justify-content-center align-items-center'>
                <div className='position-relative w-100 h-100'>
                    Cleaning Drones
                    {CDronesObjects}
                </div>
                </div>
                <div className='FieldLayout p-4 d-flex flex-column justify-content-center align-items-center'>
                <div className='position-relative w-100 h-100'>
                    Garbage Collection Drones
                    {GDronesObjects}
                </div>
                </div>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center w-25 h-100' style={{width:"25% !important"}}>
                <div className='FieldLayout p-4 d-flex flex-column justify-content-center align-items-center'>
                <div className='position-relative w-100 h-100'>
                Garbage Zone
                {
                <img src={gzoneimg} alt="" style={{width:"225px",height:"225px"}} />
                }
                </div>
                </div>
            </div>
        </div>
        <div className='FieldLayoutcust p-4 d-flex flex-column justify-content-center align-items-center mt-4 ' style={{height:"500px"}}>
        <div className='position-relative w-100 h-100'>
                {SolarPanels}
                {DronesObjects}
                {Garbeges}
        
        </div>
            
        <h4>Solar Field</h4>
        </div>
    </div>
  )
}

export default SolarField