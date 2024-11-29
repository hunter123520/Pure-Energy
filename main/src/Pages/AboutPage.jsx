import React from 'react'
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/AboutPage.css";
import team_img from "../Images/team_img.png";
import Sellami from "../Images/Sellami.jpg";
import Seif from "../Images/Seif.jpg";

import TH from "../Images/Thanks.png";
import { CgShapeRhombus } from "react-icons/cg";
import { Avatar } from "@mui/material";
import univ_img from "../Images/unv.jpg";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import GL from "../Images/GL.png";
import { useTranslation } from "react-i18next";




function AboutPage() {
  const { t, i18n } = useTranslation();

  const objectives_tl = [
    t("Save our Functions"),
    t("apply the knowledge"),
    t("Learn new technologies "),
    t("co-working"),

  ];
  
  const objectives = [
    t("Preserving the linear algebra functions that we have created in order to create a general stimulus by not ignoring the tasks performed, despite their smallness."),
    t("Employing the knowledge that we have studied in the past years, which will allow us to develop and not lose previous knowledge."),
    t("Learn the new technology used in making websites to develop and improve our skills."),
    t("Making complete work done in a team allows us to learn to collaborate and organize Different tasks within different team members."),
  ];
  
  const render_objectives = objectives.map((objective, index) => {
    return (
      // <div className='row-xs d-flex  align-items-center' style={{ fontSize: '1.5rem', fontWeight:'300',padding:"0.5em",marginLeft:(2*(1+index%2)+"em")}} key={index}>
      <div
        className="d-flex flex-column  align-items-center objcont "
        key={index}
      >
        {/* <CgShapeRhombus style={{color:"#CDC2AE"}}/> */}
        {/* <div className="objshape"></div> */}
        <span className="objtitle">{objectives_tl[index]}</span>
        <span className="objdesc">{objective}</span>
      </div>
    );
  });
  
  const project_members = [
    {
      name:t("Sellami mohammed abdelhadi") ,
      role:t("Fullstack developer") ,
      img: Sellami,
      fb_link: "https://www.facebook.com/profile.php?id=100012502147526",
    },
    {
      name: t("Hamzi oussama"),
      role: t("Fullstack developer"),
      img: Seif,
      fb_link: "https://www.facebook.com/seyf1elislam",
    },
   
   
  ];

  const render_project_members = project_members.map((member, index) => {
    return (
      <div
        className="row-xxl d-flex flex-column align-items-center justify-content-center mmbcont"
        style={{ fontWeight: "300", padding: "0.5em" ,width:"33%"}}
        key={index}
      >
        <a href={member.fb_link} target="_blank">
          <Avatar
            alt={member.name}
            src={member.img}
            sx={{ width: 126, height: 126 }}
          />
        </a>
        <span
          style={{
            fontSize: "1.2rem",
            textAlign: "center",
            marginTop: "10px",
            fontWeight: "400",
          }}
        >
          {member.name}
        </span>
        <span
          style={{
            fontSize: "0.8rem",
            textAlign: "center",
            marginTop: "10px",
            marginBottom: "25px",
          }}
        >
          {member.role}
        </span>
      </div>
    );
  });
  

  return (
    <>
      <div
        className="w-100 text-center position-absolute d-flex justify-content-center align-items-center TTlilte "
        style={{
          backgroundColor: "#06272e54",
          top: 0,
          height: 350,
          zIndex: 8,
          paddingTop: "175px",
        }}
      >
        <Typography variant="h2" gutterBottom>
          {t("About Us")}
          
        </Typography>
      </div>
      <CardMedia
        component="img"
        height="350"
        image={univ_img}
        alt="green iguana"
        sx={{
          objectPosition: "top",
          marginTop: "-100px",
          zIndex: 7,
          position: "relative",
        }}
      />
      <div className="d-flex flex-row justify-content-center align-items-center p-2 Panle">
        <Button onClick={() => window.location.replace("/About#whoweAre")}>
        {t("Who We are")}
          
        </Button>
        <Button onClick={() => window.location.replace("/About#OurTeam")}>
        {t("Our Team")}
          
        </Button>
        <Button onClick={() => window.location.replace("/About#Goals")}>
        {t("Goals")}
          
        </Button>
        <Button
          onClick={() => window.location.replace("/About#ShareKnowledge")}
        >
          {t("Share your knowledge")}
         
        </Button>
        
        
      </div>
      <div style={{ height: "50px" }}></div>
      <Container id="whoweAre" fluid="xxl" className="con-intro">
        <Container className="d-flex flex-column justify-content-center align-items-center p-5 text-center">
          <div
            className="intro-title-A text-center lighter p-0"
            style={{
              color: "#0B3841",
              fontSize: "45px",
            }}
          >
            {t("WHO WE ARE")}
            
          </div>
          <hr
            style={{
              width: "20%",
              height: 2,
              borderWidth: 3,
              color: "orange",
            }}
          />
          <Typography
            className="w-75 p-0"
            variant="h7"
            gutterBottom
            style={{ marginTop: 10 }}
            fontWeight={"bold"}
          >
            <span style={{fontSize:25,fontWeight:"300"}}><span style={{color: "#178a9f"}}>Green-VE </span></span>
            <br></br><br></br>
            {t("Welcome to our AI and Data Science Master's Student Group! We are a passionate group of students pursuing our Master's degrees in the exciting fields of Artificial Intelligence and Data Science. With a collective goal of pushing the boundaries of knowledge and leveraging the power of technology, we have come together to create innovative solutions and contribute to the ever-evolving world of AI")}
            
            .
          </Typography>
        </Container>
      </Container>
      <div style={{ height: "50px" }}></div>
      <div id="OurTeam" className="infos-container">
        <div className="team-container">
          <div className="container-xxl">
            <div
              className="team-title text-center"
              style={{
                color: "#0B3841",
                fontSize: "2.5rem",
                fontWeight: "600",
                marginTop: "0.25em",
                marginBottom: "0.5em",
                textAlign: "center",
              }}
            >
              <span> {t("Our Team:")}</span>
            </div>
          </div>
          <div
            className="row-xs d-flex flex-row flex-wrap justify-content-center align-items-center"
            style={{
              fontSize: "1.5rem",
              fontWeight: "300",
              padding: "0.5em",
              // width:"50%"
            }}
          >
            {render_project_members}
          </div>
        </div>
      </div>
      <div style={{ height: "50px" }}></div>
      <div
        id="Goals"
        className="Goals w-100 d-flex flex-row"
        style={{ padding: "15%", paddingTop: "10%", paddingBottom: "5%" }}
      >
        <div className="d-flex flex-column">
          <Typography variant="h4" gutterBottom fontWeight={"bold"}>
          {t("Our Goals")}
            
          </Typography>
          <Typography
            className="w-100 p-0"
            variant="h7"
            gutterBottom
            style={{ marginTop: 10 }}
            lineHeight={1.5}
          >
            {t("We believe in a community that prioritizes a healthy planet and a sustainable future. That's why we created this Garbage Recycling Assistant Center – to empower residents like you to become recycling champions! Our goals are clear:")}
            <br />
            <span style={{ lineHeight: 2 }}>
              {" "}
              <span style={{ color: "rgb(54, 240, 253);" }}>✓</span> {t("Educate and Inform")} 
            </span>
            <br />
            <span style={{ lineHeight: 2 }}>
              <span style={{ color: "rgb(54, 240, 253);" }}>✓</span> {t("Increase Recycling Rates")} 
            </span>
            <br />
            <span style={{ lineHeight: 2 }}>
              <span style={{ color: "rgb(54, 240, 253);" }}>✓</span> {t("Reduce Environmental Impact")} 
            </span>
            <br />
            <span style={{ lineHeight: 2 }}>
              <span style={{ color: "rgb(54, 240, 253);" }}>✓</span> {t("Foster a Culture of Sustainability")} 
            </span>
          </Typography>
        </div>
        <div className="intro-img">
          <img
            src={GL}
            alt="logo"
            height={500}
            sx={{
              objectPosition: "top",
            }}
          />
        </div>
      </div>
      <div id="ShareKnowledge" fluid="xxl" className="con-intro p-5">
        <div className="intro-container">
          <div className="intro-text-container">
            <div
              className="intro-title-A lighter p-0"
              style={{
                color: "#0B3841",
                fontSize: "45px",
              }}
            >
              <span style={{ color: "#D9383C" }}> {t("share")}  </span> {t("your knowledge")}  
            </div>
            <div className="intro-content">
              <Typography
                className="w-75 p-0"
                variant="h7"
                gutterBottom
                style={{ marginTop: 10 }}
              >
                {t("Furthermore, we are dedicated to fostering a collaborative and supportive community of learners. We encourage active engagement, questions, and discussions, and we are always excited to connect with like-minded individuals who share our passion for AI and data science. Together, we can build a strong network, exchange ideas, and inspire each other on this fascinating journey.")}
                
              </Typography>
            </div>
          </div>
          <div className="intro-img">
            <img src={team_img} alt="logo" />
          </div>
        </div>
      </div>
      
    </>
  );
}

export default AboutPage;
