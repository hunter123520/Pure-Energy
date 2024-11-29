import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "../Styles/TabStyle.css"
import { Avatar } from "@mui/material";
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import EmblaCarousel from '../Components/EmblaCarousel'
import { useTranslation } from "react-i18next";
import '../Styles/embla.css'
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

const Bird_List = [
  {img:Bird1},{img:Bird2},{img:Bird3},{img:Bird4},{img:Bird5},{img:Bird6},
  {img:Bird7},{img:Bird8},{img:Bird9},{img:Bird10},
]
const Dusty_List = [
    {img:Dusty1},{img:Dusty2},{img:Dusty3},{img:Dusty4},{img:Dusty5},{img:Dusty6},
    {img:Dusty7},{img:Dusty8},{img:Dusty9},{img:Dusty10},
  ]
  const Clean_List = [
    {img:Clean1},{img:Clean2},{img:Clean3},{img:Clean4},{img:Clean5},{img:Clean6},
    {img:Clean7},{img:Clean8},{img:Clean9},{img:Clean10},
  ]
  const Snow_List = [
    {img:Snow1},{img:Snow2},{img:Snow3},{img:Snow4},{img:Snow5},{img:Snow6},
    {img:Snow7},{img:Snow8},{img:Snow9},{img:Snow10},
  ]
  const Physical_List = [
    {img:Physical1},{img:Physical2},{img:Physical3},{img:Physical4},{img:Physical5},{img:Physical6},
    {img:Physical7},{img:Physical8},{img:Physical9},{img:Physical10},
  ]
  const Electrical_List = [
    {img:Electrical1},{img:Electrical2},{img:Electrical3},{img:Electrical4},{img:Electrical5},{img:Electrical6},
    {img:Electrical7},{img:Electrical8},{img:Electrical9},{img:Electrical10},
  ]

const OPTIONS = { dragFree: true }
const SLIDE_COUNT = 16
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Food_Generator = (Food_List = Food_List) =>{
  return (
    <EmblaCarousel slides={Food_List.map(product => {
      return(
        <div className='d-flex flex-column productDisplayer justify-content-center align-items-center'>
            <img src={product.img} alt="" className='vs-img' />
        </div>
      );
    })} options={OPTIONS} />
  );
}

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const TabsHolder1 = () => {
    const [value, setValue] = React.useState(0);
    const { t, i18n } = useTranslation();

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <>
   
    <Box sx={{ width: '100%' }}>
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs  value={value} onChange={handleChange} centered  >
        <Tab label={t("Clean")} {...a11yProps(0)} className='Tab1' />
        <Tab label={t("Dusty")} {...a11yProps(1)} className='Tab1'/>
        <Tab label={t("Bird Drop")} {...a11yProps(2)} className='Tab1'/>
        <Tab label={t("Electrical Damage")} {...a11yProps(3)} className='Tab1'/>
        <Tab label={t("Physical Damage")} {...a11yProps(4)} className='Tab1'/>
        <Tab label={t("Snow Covered" )}{...a11yProps(5)} className='Tab1'/>
      </Tabs>
    </Box>
      <CustomTabPanel value={value} index={0}> {Food_Generator(Clean_List)} </CustomTabPanel>
      <CustomTabPanel value={value} index={1}> {Food_Generator(Dusty_List)} </CustomTabPanel>
      <CustomTabPanel value={value} index={2}> {Food_Generator(Bird_List)} </CustomTabPanel>
      <CustomTabPanel value={value} index={3}> {Food_Generator(Electrical_List)} </CustomTabPanel>
      <CustomTabPanel value={value} index={4}> {Food_Generator(Physical_List)} </CustomTabPanel>
      <CustomTabPanel value={value} index={5}> {Food_Generator(Snow_List)} </CustomTabPanel>
    </Box>
    </>

  )
}

export default TabsHolder1