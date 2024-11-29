import React from "react";
import "../Styles/LearningPage.css";
import "../Styles/ContactPage.css";
import Container from "react-bootstrap/Container";
import ChatComp from "../Components/ChatComp";
import ChatComp1 from "../Components/ChatComp1";
import { useTranslation } from "react-i18next";
const Assistant = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <Container fluid="xxl" className="CPT">
        <div className="CPTTitle">
          {t("The Assistant Center")}
          
          <hr className="lineSt" />
        </div>
        <div className="CPTdesc">
        {t("Feeling unsure about your solar panels or waste disposal? Your one-stop solution is here! Our expert assistant provides the tools and knowledge to optimize both. Learn how to maximize your solar panel efficiency, identify and resolve common issues, and discover responsible end-of-life solutions. Understand complex recycling guidelines, sort your waste with confidence, and learn how to properly dispose of hazardous materials. Let's work together to create a greener future.")}
        
        </div>
      </Container>
      <Container fluid="xxl" className="ResourcesCont mb-5" >
      <ChatComp1 >

      </ChatComp1>
      </Container>

      <Container fluid="xxl" className="ResourcesCont mt-5" >

      

      <ChatComp >

      </ChatComp>
      </Container>
    </div>
  );
};

export default Assistant;
